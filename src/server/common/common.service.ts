import { $, NAIRA, age } from "@/utils";
import date from "@/utils/phpDateFormat";

export class CommonService {
  // 1992 & 1992.00 & 1,992 & N 1,992
  static numberPipe(n: number) {
    return {
      asInteger: n,
      asFloat: n.toFixed(2),
      asString: $(n),
      asMoney: NAIRA + " " + $(n),
    };
  }

  static avatar(avatar: string | undefined) {
    return avatar || "/images/avatar-flat.png";
  }

  static fullName(surname: string, other_names: string) {
    return `${surname} ${other_names}`;
  }

  // Sep 15, 1992
  static dateOfBirth(date_of_birth: string | Date) {
    return date(date_of_birth as string, "M j, Y") as string;
  }

  static age(date_of_birth: string | Date) {
    return age(date_of_birth);
  }

  // 21-77362408-8
  static nationalId(national_id: string) {
    let [ab, z] = [national_id.slice(0, 2), national_id.slice(-1)];
    return `${ab}-${national_id.slice(2, 10)}-${z}`;
  }

  // 21-77362408-8
  static createdAt(created_at: string | Date) {
    return date(created_at as string, "M j") as string;
  }
}
