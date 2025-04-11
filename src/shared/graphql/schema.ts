// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    BigDecimal: any,
    Boolean: boolean,
    ID: string,
    Int: number,
    LocalDateTime: any,
    String: string,
}

export interface CategoryPageable {
    categories: PersonCategory[]
    totalPages: Scalars['Int']
    hasNextPage: Scalars['Boolean']
    __typename: 'CategoryPageable'
}

export interface Mutation {
    addCategory: PersonCategory
    __typename: 'Mutation'
}

export interface Person {
    perUUID: Scalars['ID']
    perMail: Scalars['String']
    perName: Scalars['String']
    perLastname: Scalars['String']
    isEnabled: Scalars['Boolean']
    categories: CategoryPageable
    __typename: 'Person'
}

export interface PersonCategory {
    catId: Scalars['ID']
    catName: Scalars['String']
    catType: TypeCategory
    catIcon: Scalars['String']
    isDeleted: Scalars['Boolean']
    __typename: 'PersonCategory'
}

export interface Query {
    personData: (Person | null)
    __typename: 'Query'
}

export interface Transaction {
    uuid: Scalars['ID']
    date: Scalars['LocalDateTime']
    monthReference: Scalars['Int']
    description: Scalars['String']
    amount: Scalars['BigDecimal']
    __typename: 'Transaction'
}

export type TypeCategory = 'E' | 'I'

export interface CategoryInput {perUUID: Scalars['ID'],catName: Scalars['String'],catType: TypeCategory,catIcon: Scalars['String']}

export interface CategoryPageableGenqlSelection{
    categories?: PersonCategoryGenqlSelection
    totalPages?: boolean | number
    hasNextPage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    addCategory?: (PersonCategoryGenqlSelection & { __args: {category: CategoryInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PersonGenqlSelection{
    perUUID?: boolean | number
    perMail?: boolean | number
    perName?: boolean | number
    perLastname?: boolean | number
    isEnabled?: boolean | number
    categories?: (CategoryPageableGenqlSelection & { __args?: {offset?: (Scalars['Int'] | null), limit?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PersonCategoryGenqlSelection{
    catId?: boolean | number
    catName?: boolean | number
    catType?: boolean | number
    catIcon?: boolean | number
    isDeleted?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    personData?: (PersonGenqlSelection & { __args: {perMail: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TransactionGenqlSelection{
    uuid?: boolean | number
    date?: boolean | number
    monthReference?: boolean | number
    description?: boolean | number
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const CategoryPageable_possibleTypes: string[] = ['CategoryPageable']
    export const isCategoryPageable = (obj?: { __typename?: any } | null): obj is CategoryPageable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryPageable"')
      return CategoryPageable_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Person_possibleTypes: string[] = ['Person']
    export const isPerson = (obj?: { __typename?: any } | null): obj is Person => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPerson"')
      return Person_possibleTypes.includes(obj.__typename)
    }
    


    const PersonCategory_possibleTypes: string[] = ['PersonCategory']
    export const isPersonCategory = (obj?: { __typename?: any } | null): obj is PersonCategory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPersonCategory"')
      return PersonCategory_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Transaction_possibleTypes: string[] = ['Transaction']
    export const isTransaction = (obj?: { __typename?: any } | null): obj is Transaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTransaction"')
      return Transaction_possibleTypes.includes(obj.__typename)
    }
    

export const enumTypeCategory = {
   E: 'E' as const,
   I: 'I' as const
}
