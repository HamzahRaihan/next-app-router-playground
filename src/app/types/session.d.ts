export type Session = {
  data: {
    user: {
      fullname: string;
      email: string;
      role: 'admin' | 'customer';
    };
  } | null;
  status: 'authenticated' | 'loading' | 'unauthenticated';
};
