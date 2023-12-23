import { type User, type UserProfile } from "./types";

export const TestUsers: User[] = [
  {
    id: 1,
    email: "test+1@example.com",
    isAuthenticated: false,
  },
  {
    id: 2,
    email: "test+2@example.com",
    isAuthenticated: false,
  },
];

export const TestUserProfiles: UserProfile[] = [
  {
    id: 1,
    name: "Top Player",
    user: TestUsers[0],
  },
  {
    id: 2,
    name: "Middle Player",
    user: TestUsers[1],
  },
];
