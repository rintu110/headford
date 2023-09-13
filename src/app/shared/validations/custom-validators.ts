/**
 * Created By  : 
 * Created On  : 20-05-2022
 * Description : Custom validations.
 **/
import {
    FormGroup,
    AbstractControl,
    ValidationErrors,
  } from "@angular/forms";



  
  import { AlertHelpers } from "src/app/core/helpers/alert-helpers";
  
  export class CustomValidators {
    alertHelper = new AlertHelpers();
  
    /* Description : allow only nmbers between 0-9 */
    keyPressNumbers(event: any) {
      var charCode = event.which ? event.which : event.keyCode;
      // Only Numbers 0-9
      if (charCode < 48 || charCode > 57) {
        return false;
      } else {
        return true;
      }
    }
  
    keyPressAlphabetSpaceDot(event: any) {
      var charCode = event.which ? event.which : event.keyCode;
      // Only Numbers 0-9
      if (
        (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 123) &&
        charCode != 32 &&
        charCode != 46
      ) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    }
  
    keyPressAlphabetSpaceDotDigit(event: any) {
      var charCode = event.which ? event.which : event.keyCode;
      // Only Numbers 0-9
      if (
        (charCode < 48 || charCode > 57) &&
        (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 123) &&
        charCode != 32 &&
        charCode != 46
      ) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    }
  
    camelToTitleCase(txtString: any) {
      const result = txtString.replace(/([A-Z])/g, " $1");
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      return finalResult;
    }
  
    camelToSentenceCase(txtString: any) {
      return txtString
        .split(/([A-Z]|\d)/)
        .map((v: any, i: any, arr: any) => {
          // If first block then capitalise 1st letter regardless
          if (!i) return v.charAt(0).toUpperCase() + v.slice(1);
          // Skip empty blocks
          if (!v) return v;
          // Underscore substitution
          if (v === "_") return " ";
          // We have a capital or number
          if (v.length === 1 && v === v.toUpperCase()) {
            const previousCapital = !arr[i - 1] || arr[i - 1] === "_";
            const nextWord =
              i + 1 < arr.length && arr[i + 1] && arr[i + 1] !== "_";
            const nextTwoCapitalsOrEndOfString =
              i + 3 > arr.length || (!arr[i + 1] && !arr[i + 3]);
            // Insert space
            if (!previousCapital || nextWord) v = " " + v;
            // Start of word or single letter word
            if (nextWord || (!previousCapital && !nextTwoCapitalsOrEndOfString))
              v = v.toLowerCase();
          }
          return v;
        })
        .join("");
    }
  
    /* Created By  : Sambit Kumar Dalai ||  Created On : 19-05-2022  || Description : allow only numbers  */
    onlyNumber(event: any) {
      event = event ? event : window.event;
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode < 48 || charCode > 57) {
        return false;
      }
      return true;
    }
  
    /* Created By  : Swagatika ||  Created On : 25-05-2022  || Description : Allow Only Numbers with Decimals  */
    keyPressNumbersDecimal(event: any) {
      var charCode = event.which ? event.which : event.keyCode;
      if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
      }
      return true;
    }
  
    /* Created By  : Swagatika ||  Created On : 25-05-2022  || Description : Allow Only Numbers with Decimals and - */
    keyPressLatLong(event: any) {
      var charCode = event.which ? event.which : event.keyCode;
      if (
        charCode != 45 &&
        charCode != 46 &&
        charCode > 31 &&
        (charCode < 48 || charCode > 57)
      ) {
        event.preventDefault();
        return false;
      }
      return true;
    }
  
    /* Created By  : Sambit Kumar Dalai ||  Created On : 16-05-2022  || Description : allow only alphabets between a-z or A-Z  */
    onlyAlphabets(event: any): boolean {
      const charCode = event.which ? event.which : event.keyCode;
      // Only Numbers 0-9 and space
      if (charCode === 32) return true;
      if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97))
        return false;
      return true;
    }
  
    /* Created By  : Sambit Kumar Dalai ||  Created On : 16-05-2022  || Description : allow only alphabets between a-z or A-Z  */
    onlyNumbersWithDecimal(event: any): boolean {
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode === 46) return true;
      if (charCode < 48 || charCode > 57) return false;
      return true;
    }
  
    /* Created By  : Sambit Kumar Dalai ||  Created On : 06-06-2022  || Description : Check for special characters  */
    checkSpecialChar(event: any): boolean {
      const charCode = event?.which ? event?.keyCode : event?.which;
      return (
        (charCode > 64 && charCode < 91) ||
        (charCode > 96 && charCode < 123) ||
        charCode == 8 ||
        charCode == 32 ||
        (charCode >= 48 && charCode <= 57)
      );
    }
  
    /* Created By  : Sambit Kumar Dalai ||  Created On : 06-06-2022  || Description : Check word start with white space */
    firstCharValidator(event: any) {
      const validatorArr = [
        event.target.value.startsWith(" "),
        event.target.value.startsWith("."),
      ];
  
      if (validatorArr.includes(true)) {
        this.alertHelper.viewAlert(
          "error",
          "Invalid",
          "Space/dot not allowed as first character."
        );
      }
    }
  
    /* Created By  : Sambit Kumar Dalai ||  Created On : 06-06-2022  || Description : Check alphabet with comma */
    alphabetWithComma(event: any) {
      const charCode = event?.which ? event?.keyCode : event?.which;
      if (charCode === 44) return true;
      if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97))
        return false;
      return true;
    }
  
    /* Created By  : Sambit Kumar Dalai ||  Created On : 06-06-2022  || Description : Check alphabet with comma and space */
    alphaNumericWithCommaSpace(event: any) {
      const charCode = event?.which ? event?.keyCode : event?.which;
      if (charCode === 44 || charCode === 32) return true;
      if (charCode >= 48 && charCode <= 57) return true;
      if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97))
        return false;
      return true;
    }
  
    /* Created By  : Sambit Kumar Dalai ||  Created On : 06-06-2022  || Description : customizable alphanumeric validator */
    alphaNumericValidator(event: any, ...types: any) {
      const charCode = event.which ? event.keyCode : event.which;
      // allow comma
      if (types.includes("comma") && charCode === 44) return true;
      if (types.includes("plus") && charCode === 43) return true;
      if (types.includes("space") && charCode === 32) return true;
      if (types.includes("dot") && charCode === 46) return true;
      if (types.includes("hyphen") && charCode === 45) return true;
      if (types.includes("slash") && charCode === 47) return true;
      if (types.includes("singleQuote") && charCode === 39) return true;
      if (types.includes("leftParaanthesis") && charCode === 40) return true;
      if (types.includes("rightParaanthesis") && charCode === 41) return true;
      // ==== default condition for alphabets and numbers
  
      if (charCode >= 48 && charCode <= 57) return true;
      if (charCode >= 65 && charCode <= 90) return true;
      if (charCode >= 97 && charCode <= 122) return true;
      //end
      return false;
    }
  
    // ================================= Reactive form Validations
  
    /* Created By  : Sambit Kumar Dalai ||  Created On : 16-05-2022  || Description : Central client side validator  */
    formValidationHandler(
      formGroup: FormGroup,
      labels: string[],
      elementRef: any = undefined
    ): any {
      if (formGroup.invalid === true) {
        let i = 0;
        for (let iterator in formGroup.controls) {
          // focus
          if (formGroup.controls[iterator]?.invalid) {
            elementRef?.nativeElement
              .querySelector('[formControlName="' + iterator + '"]')
              ?.focus();
          } // end
  
          if (formGroup.controls[iterator].errors?.["required"] === true) {
            this.alertHelper.viewAlert(
              "error",
              "Invalid",
              `${labels[i]} is required`
            );
            return [labels[i], true];
          }
  
          if (formGroup.controls[iterator].errors?.["email"] === true) {
            this.alertHelper.viewAlert(
              "error",
              "Invalid",
              `Invalid mail id for ${labels[i].toLowerCase()}`
            );
            return [labels[i], true];
          }
  
          // ===== conditional required validation
          if (
            formGroup.controls[iterator].errors?.["conditionalValidation"]
              ?.required === true
          ) {
            this.alertHelper.viewAlert(
              "error",
              "Invalid",
              `${labels[i]} required`
            );
  
            return [labels[i], true];
          }
          if (formGroup.controls[iterator].errors?.["maxlength"] !== undefined) {
            const { actualLength, requiredLength } =
              formGroup.controls[iterator].errors?.["maxlength"];
            if (actualLength !== requiredLength) {
              this.alertHelper.viewAlert(
                "error",
                "Invalid",
                `${labels[i]} length should be maximum ${requiredLength} characters.`
              );
            }
  
            return [labels[i], true];
          }
          if (formGroup.controls[iterator].errors?.["minlength"] !== undefined) {
            const { actualLength, requiredLength } =
              formGroup.controls[iterator].errors?.["minlength"];
            if (actualLength !== requiredLength) {
              this.alertHelper.viewAlert(
                "error",
                "Invalid",
                `${labels[i]} length should be minimum ${requiredLength} characters.`
              );
            }
  
            return [labels[i], true];
          }
  
          if (formGroup.controls[iterator].errors?.["max"] !== undefined) {
            const { actual, max } = formGroup.controls[iterator].errors?.["max"];
            if (actual !== max) {
              this.alertHelper.viewAlert(
                "error",
                "Invalid",
                `${labels[i]} should be maximum ${max}.`
              );
            }
            return [labels[i], true];
          }
  
          if (formGroup.controls[iterator].errors?.["min"] !== undefined) {
            // console.log(formGroup.controls[iterator].errors?.["min"]);
            let tmpMsg: any = "";
            const { actual, min } = formGroup.controls[iterator].errors?.["min"];
            if (actual !== min) {
              this.alertHelper.viewAlert(
                "error",
                "Invalid",
                `${labels[i]} should be minimum ${min}`
              );
            }
            if (actual !== min) {
              if (min > 1) {
                tmpMsg = `${labels[i]} should be minimum ${min}`;
              } else {
                tmpMsg = `${labels[i]} should not be zero`;
              }
              this.alertHelper.viewAlert("error", "Invalid", tmpMsg);
            }
            return [labels[i], true];
          }
  
          if (formGroup.controls[iterator].errors?.["pattern"] !== undefined) {
            this.alertHelper.viewAlert(
              "error",
              "Invalid",
              `Invalid input for ${labels[i].toLowerCase()}`
            );
  
            return [labels[i], true];
          }
          if (
            formGroup.controls[iterator].errors?.["firstCharValidatorRF"] !==
            undefined
          ) {
            this.alertHelper.viewAlert(
              "error",
              "Invalid",
              `Space/dot not allowed as first character in ${labels[
                i
              ].toLowerCase()} `
            );
  
            return [labels[i], true];
          }
          i++;
        }
      }
      return false;
    }
  
  
    firstCharValidatorRF(control: AbstractControl): ValidationErrors | null {
      // 1) if input is number type
      if (
        typeof control.value === "number" &&
        control.value.toString().indexOf(" ") == 0
      ) {
        return { firstCharValidatorRF: true };
      }
      // 2) if input is string type
      if (
        typeof control.value === "string" &&
        (control.value as string).indexOf(" ") == 0
      ) {
        return { firstCharValidatorRF: true };
      }
  
      return null;
    }
  
    keyPressDotSlashComma(event: any) {
      var regex = new RegExp("^[a-zA-Z0-9, ./-]+$");
      var key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode
      );
      if (!regex.test(key)) {
        event.preventDefault();
        //  return false;
      }
    }
  
    keyPressAlphSlashUnderscore(event: any) {
      var regex = new RegExp("^[a-zA-Z /_]+$");
      var key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode
      );
      if (!regex.test(key)) {
        event.preventDefault();
        //  return false;
      }
    }
  
  
  
    maxAgeValidation(maxAge:any,inputAge:any){
      if(inputAge > maxAge){
          return false; 
      }else{
          return true; 
      }
    }
  
    validateAdhar(param:any){
      var regex = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
      if (regex.test(param)) {
          return true;
      } else {
          return false;
      }
    }
  
    validateVoterId(param:any){
      let regex = new RegExp(/^[A-Z]{3}[0-9]{7}$/);
      if (regex.test(param)) {
          return true;
      } else {
          return false;
      }
    }
  
    validateDL(param:any){
      let regexdl = new RegExp(/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/);
      if (regexdl.test(param)) {
          return true;
      } else {
          return false;
      }
    }
  
    //Block Whitespace
    keyPressExcludeSpace(event: any) {
      var charCode = event.which ? event.which : event.keyCode;
      if (charCode == 32) {
        return false;
      } else {
        return true;
      }
    }
    
  }
  