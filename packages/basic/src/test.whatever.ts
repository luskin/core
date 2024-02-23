import { stringUtils } from "@core/utils"

export class TestClass {
  public hello() {
    return stringUtils.capitalizeFirstLetter("hello")
  }
}
