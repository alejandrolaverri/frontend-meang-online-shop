import { USER_FRAGMENT } from '@graphql/operations/fragments/user';
import gql from 'graphql-tag';

export const LOGIN_QUERY = gql`
    query getLogin($email: String!, $password: String!, $include: Boolean!) {
        login(email: $email, password: $password) {
            status
            message
            token
            user {
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;

export const USERS_LIST_QUERY = gql`
    query usersList($include: Boolean!){
        users {
            status
            message
            users {
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;

export const ME_DATA_QUERY = gql`
    query meData($include: Boolean!){
        me {
            status
            message
            user {
                ...UserObject
            }
        }
    }
    ${ USER_FRAGMENT }
`;
