import { USER_FRAGMENT } from '@graphql/operations/fragments/user';
import gql from 'graphql-tag';

export const REGISTER_USER = gql`
    mutation addUser($user: UserInput!, $include: Boolean!) {
        register(user: $user) {
            status
            message
            user {
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;
