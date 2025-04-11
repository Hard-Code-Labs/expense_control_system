import { client } from "@/src/shared/graphql/client";

interface Props {
  userMail: string;
  offset: number;
  limit: number;
}

export const getCategories = async ({ userMail, offset, limit }: Props) => {
  const response = await client().query({
    personData: {
      __args: { perMail: userMail },
      categories: {
        __args: {
          offset: offset,
          limit: limit, 
        },
        totalPages: true,
        hasNextPage: true,
        categories: {
          // catId: true, // Error cuando se pide el id
          catName: true,
          catType: true,
          catIcon: true,
          isDeleted: true,
        },
      },
    },
  });

  return response.personData?.categories;
};
