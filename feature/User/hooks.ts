import { TestUsers, TestUserProfiles } from "./testData";

export const useUser = (email: string) => {
  const user = TestUsers.find((user) => user.email === email);
  if (!user) {
    throw new Error(`No user found for email: ${email}`);
  }

  return {
    user,
  };
};

export const useUserProfile = (userId: number) => {
  const userProfile = TestUserProfiles.find(
    (userProfile) => userProfile.user.id === userId
  );

  if (!userProfile) {
    throw new Error(`No user profile found for userId: ${userId}`);
  }

  return {
    userProfile,
  };
};
