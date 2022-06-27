import {TSchool} from "../../../models/common";

export const translateSchool = (school : TSchool) => {
    switch (school) {
        case "DSM":
            return "대덕소프트웨어마이스고"
        case "DGSW":
            return "대구소프트웨어마이스터고"
        case "GSM":
            return "광주소프트웨어마이스터고"
        case "NCMM":
            return "미림마이스터고"
        case "BSSM":
            return "부산소프트웨어마이스터고"
        default:
            return ""
    }
}