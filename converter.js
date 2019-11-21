module.exports = {
    convertToBinary: function(n){
        let binaryString = "";
        while(n>=1){
            let remainder = n%2;
            binaryString = remainder + binaryString;
            n = Math.floor(n/2);
        }
        return binaryString;
    },

    convertToHex: function(n){
        let hexString = "";
        while(n>=1){
            let remainder = n%16
            switch (remainder){
                case 10:
                hexString = "A" + hexString;
                break;

                case 11:
                hexString = "B" + hexString;
                break;
    
                case 12:
                hexString = "C" + hexString;
                break;
                        
                case 13:
                hexString = "D" + hexString;
                break;

                case 14:
                hexString = "E" + hexString;
                break;

                case 15:
                hexString = "F" + hexString;
                break;

                default: 
                hexString = remainder + hexString;

            
            }
            n = Math.floor(n/16);
        }
        return hexString;
    }        
}


