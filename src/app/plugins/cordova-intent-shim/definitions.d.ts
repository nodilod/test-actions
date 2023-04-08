export interface DatawedgeScanningResult {
    action: string; // example: com.wiilog.wiistock.ACTION
    extras: {
        ['com.symbol.datawedge.data_dispatch_time']: number; // example : 1676113123021
        ['com.symbol.datawedge.data_string']: string; // example: "barcode"
        ['com.symbol.datawedge.label_type']: LabelType; // example: "LABEL-TYPE-CODE128"
    }
}

type LabelType = "LABEL-TYPE-CODE39"
               | "LABEL-TYPE-CODABAR"
               | "LABEL-TYPE-CODE128"
               | "LABEL-TYPE-D2OF5"
               | "LABEL-TYPE-IATA2OF5"
               | "LABEL-TYPE-I2OF5"
               | "LABEL-TYPE-CODE93"
               | "LABEL-TYPE-UPCA"
               | "LABEL-TYPE-UPCE0"
               | "LABEL-TYPE-UPCE1"
               | "LABEL-TYPE-EAN8"
               | "LABEL-TYPE-EAN13"
               | "LABEL-TYPE-MSI"
               | "LABEL-TYPE-EAN128"
               | "LABEL-TYPE-TRIOPTIC39"
               | "LABEL-TYPE-BOOKLAND"
               | "LABEL-TYPE-COUPON"
               | "LABEL-TYPE-DATABAR-COUPON"
               | "LABEL-TYPE-ISBT128"
               | "LABEL-TYPE-CODE32"
               | "LABEL-TYPE-PDF417"
               | "LABEL-TYPE-MICROPDF"
               | "LABEL-TYPE-TLC39"
               | "LABEL-TYPE-CODE11"
               | "LABEL-TYPE-MAXICODE"
               | "LABEL-TYPE-DATAMATRIX"
               | "LABEL-TYPE-QRCODE"
               | "LABEL-TYPE-GS1-DATABAR"
               | "LABEL-TYPE-GS1-DATABAR-LIM"
               | "LABEL-TYPE-GS1-DATABAR-EXP"
               | "LABEL-TYPE-USPOSTNET"
               | "LABEL-TYPE-USPLANET"
               | "LABEL-TYPE-UKPOSTAL"
               | "LABEL-TYPE-JAPPOSTAL"
               | "LABEL-TYPE-AUSPOSTAL"
               | "LABEL-TYPE-DUTCHPOSTAL"
               | "LABEL-TYPE-FINNISHPOSTAL-4S"
               | "LABEL-TYPE-CANPOSTAL"
               | "LABEL-TYPE-CHINESE-2OF5"
               | "LABEL-TYPE-AZTEC"
               | "LABEL-TYPE-MICROQR"
               | "LABEL-TYPE-US4STATE"
               | "LABEL-TYPE-US4STATE-FICS"
               | "LABEL-TYPE-COMPOSITE-AB"
               | "LABEL-TYPE-COMPOSITE-C"
               | "LABEL-TYPE-WEBCODE"
               | "LABEL-TYPE-SIGNATURE"
               | "LABEL-TYPE-KOREAN-3OF5"
               | "LABEL-TYPE-MATRIX-2OF5"
               | "LABEL-TYPE-OCR"
               | "LABEL-TYPE-HANXIN"
               | "LABEL-TYPE-MAILMARK"
               | "MULTICODE-DATA-FORMAT"
               | "LABEL-TYPE-GS1-DATAMATRIX"
               | "LABEL-TYPE-GS1-QRCODE"
               | "LABEL-TYPE-DOTCODE"
               | "LABEL-TYPE-GRIDMATRIX"
               | "LABEL-TYPE-UNDEFINED"