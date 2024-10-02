import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from './init';
import bcrypt from 'bcrypt';

const firestore = getFirestore(app);

export const retrieveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};

export const retrieveDataById = async (collectionName: string, id: string) => {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
};

export const signIn = async ({ email }: { email: string }) => {
  const findUser = query(collection(firestore, 'users'), where('email', '==', email));
  const snapshot = await getDocs(findUser);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (users.length > 0) {
    return users[0];
  }
  return null;
};

export const register = async (userData: { fullname: string; email: string; password: string; role: string }) => {
  const findUser = query(collection(firestore, 'users'), where('email', '==', userData.email));
  const snapshot = await getDocs(findUser);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (users.length > 0) {
    return { status: false, message: 'email already exist', statusCode: 401 };
  }
  userData.password = await bcrypt.hash(userData.password, 10);
  userData.role = 'customer';
  await addDoc(collection(firestore, 'users'), userData)
    .then(() => {
      return { status: true, message: 'Account successfully registered', statusCode: 200 };
    })
    .catch((error) => {
      return { status: false, message: error.message, statusCode: 400 };
    });
};
