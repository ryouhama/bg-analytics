export type User = {
  id: number;
  email: string;
  isAuthenticated: boolean;
};

export type UserProfile = {
  id: number;
  name: string;
  user: User;
};
