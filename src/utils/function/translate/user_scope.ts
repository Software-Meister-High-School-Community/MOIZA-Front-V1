import {TUser} from "../../../models/common";

export const translateUserScope = (user_scope : TUser) => {
    switch (user_scope) {
        case "STUDENT":
            return "재학생"
        case "GRADUATE":
            return "졸업생"
        case "ADMIN":
            return "관리자"
        default:
            return ""
    }
}