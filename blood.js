const GiveBlood = (donor,recipient) => {
    if (donor === "A-"){
        if (recipient === "A+" || recipient === "A-" || recipient === "AB-" || recipient === "AB+"){
            console.log("True");
        } 
        else{
            console.log("False");
        }
    } else if (donor === "A+"){
        if (recipient === "A+" || recipient === "AB+"){
            console.log("True");
        } 
        else{
            console.log("False");
        }
    }else if (donor === "B-"){
        if (recipient === "B+" || recipient === "B-" || recipient === "AB-" || recipient === "AB+"){
            console.log("True");
        } 
        else{
            console.log("False");
        }
    } else if (donor === "B+"){
        if (recipient === "B+" || recipient === "AB+"){
            console.log("True");
        } 
        else{
            console.log("False");
        }
    } else if (donor === "AB-"){
        if (recipient === "AB-" || recipient === "AB+"){
            console.log("True");
        } 
        else{
            console.log("False");
        }
    } else if (donor === "AB+"){
        if (recipient === "AB+"){
            console.log("True");
        } 
        else{
            console.log("False");
        }
    } else if (donor === "O-"){
        console.log("True");;
    } else if (donor === "O+"){
        if (recipient === "A+" || recipient === "B+" || recipient === "AB+" || recipient === "O+"){
            console.log("True");
        } 
        else{
            console.log("False");
        }
    } else{
        console.log("Invalid");
    }
}

GiveBlood("O+","A+");
GiveBlood("A-","B-");
GiveBlood("A-", "AB+");
GiveBlood("A+", "A-");
GiveBlood("O+","AB+");