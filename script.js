let motos = [
    {
        marca: "Yamaha",
        modelo: "Nmax",
        categoria: "Automáticas",
        id: 828978,
        cilindraje: 150,
        precio: 3100,
        sisAbs: "Si",
        potencia: 15.15,
        torque: 13.9,
        inventario: 432,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2021/03/nmax_3.png"
    },
    {
        marca: "Yamaha",
        modelo: "Xmax",
        categoria: "Automáticas",
        id: 759158,
        cilindraje: 292,
        precio: 7000,
        sisAbs: "Si",
        potencia: 27.6,
        torque: 29,
        inventario: 223,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/09/xmax_verde.png"
    },
    {
        marca: "Yamaha",
        modelo: "YCZ",
        categoria: "Urbanas",
        id: 459273,
        cilindraje: 110,
        precio: 1300,
        sisAbs: "No",
        potencia: 7.3,
        torque: 8.6,
        inventario: 349,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/08/yamaha-ycz-110-negra-con-azul-1.png"
    },
    {
        marca: "Yamaha",
        modelo: "YBRZ",
        categoria: "Urbanas",
        id: 150982,
        cilindraje: 124,
        precio: 1660,
        sisAbs: "No",
        potencia: 10,
        torque: 9.9,
        inventario: 347,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2021/03/azul.png"
    },
    {
        marca: "Yamaha",
        modelo: "SZRR",
        categoria: "Urbanas",
        id: 184656,
        cilindraje: 149,
        precio: 1840,
        sisAbs: "No",
        potencia: 11.9,
        torque: 12.8,
        inventario: 284,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/sz_gris_verde-1.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "FZ 2.0",
        categoria: "Urbanas",
        id: 576427,
        cilindraje: 149,
        precio: 2060,
        sisAbs: "No",
        potencia: 13,
        torque: 12.8,
        inventario: 227,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2021/04/fz25_negra.png"
    },
    {
        marca: "Yamaha",
        modelo: "FZ 25",
        categoria: "Urbanas",
        id: 414928,
        cilindraje: 249,
        precio: 3100,
        sisAbs: "Si",
        potencia: 20.6,
        torque: 20,
        inventario: 138,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/08/fz25_azul.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "XTZ 125",
        categoria: "Enduro",
        id: 394048,
        cilindraje: 124,
        precio: 2025,
        sisAbs: "No",
        potencia: 10,
        torque: 9.9,
        inventario: 305,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/xtz-125-azul.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "XTZ 150",
        categoria: "Enduro",
        id: 603730,
        cilindraje: 149,
        precio: 2460,
        sisAbs: "No",
        potencia: 12.3,
        torque: 13.1,
        inventario: 346,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/09/xtz150_blanca.png"
    },
    {
        marca: "Yamaha",
        modelo: "XTZ 250",
        categoria: "Enduro",
        id: 785552,
        cilindraje: 249,
        precio: 4780,
        sisAbs: "Si",
        potencia: 20.4,
        torque: 20.5,
        inventario: 258,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/11/xtz250-2020-azul.png"
    },
    {
        marca: "Yamaha",
        modelo: "MT-07",
        categoria: "Alto cilindraje",
        id: 107072,
        cilindraje: 689,
        precio: 9800,
        sisAbs: "Si",
        potencia: 72.4,
        torque: 67,
        inventario: 172,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/05/mt07-gris.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "MT-09",
        categoria: "Alto cilindraje",
        id: 841336,
        cilindraje: 890,
        precio: 11500,
        sisAbs: "Si",
        potencia: 117.3,
        torque: 93,
        inventario: 325,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/MT09-2022-COLOR_AZUL.jpg"
    },
    {
        marca: "Yamaha",
        modelo: "MT-10",
        categoria: "Alto cilindraje",
        id: 480239,
        cilindraje: 998,
        precio: 17400,
        sisAbs: "Si",
        potencia: 163.6,
        torque: 112,
        inventario: 133,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/Mt10_gris.png"
    },
    {
        marca: "Yamaha",
        modelo: "R1",
        categoria: "Alto cilindraje",
        id: 265125,
        cilindraje: 998,
        precio: 19000,
        sisAbs: "Si",
        potencia: 197.26,
        torque: 113.3,
        inventario: 543,
        imgMoto: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2020/02/R1-2022-COLOR_AZUL.jpg"
    },
    {
        marca: "Suzuki",
        modelo: "Avenis",
        categoria: "Automáticas",
        id: 215553,
        cilindraje: 124.3,
        precio: 2408,
        sisAbs: "No",
        potencia: 8.6,
        torque: 10,
        inventario: 432,
        imgMoto: "https://suzuki.com.co/sites/default/files/2022-10/Medida%20para%20segmento-%20819x460%20blanca_0.png"
    },
    {
        marca: "Suzuki",
        modelo: "Burgman",
        categoria: "Automáticas",
        id: 864901,
        cilindraje: 124,
        precio: 2214,
        sisAbs: "No",
        potencia: 8.3,
        torque: 9.7,
        inventario: 53,
        imgMoto: "https://suzuki.com.co/sites/default/files/2022-10/BURGMAN%20NEGRA.png"
    },
    {
        marca: "Suzuki",
        modelo: "Address",
        categoria: "Automáticas",
        id: 606235,
        cilindraje: 113,
        precio: 1930,
        sisAbs: "No",
        potencia: 7.7,
        torque: 9.2,
        inventario: 123,
        imgMoto: "https://suzuki.com.co/sites/default/files/2022-08/suzuki-address-azul-matte.png"
    },
    {
        marca: "Suzuki",
        modelo: "DR 150",
        categoria: "Enduro",
        id: 859697,
        cilindraje: 149,
        precio: 2174,
        sisAbs: "No",
        potencia: 12.2,
        torque: 12.7,
        inventario: 654,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-03/Amarillo%20Negro.png"
    },
    {
        marca: "Suzuki",
        modelo: "Gixxer 150",
        categoria: "Urbanas",
        id: 701347,
        cilindraje: 149,
        precio: 2019,
        sisAbs: "Si",
        potencia: 18.9,
        torque: 14,
        inventario: 230,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-07/Negro_0.png"
    },
    {
        marca: "Suzuki",
        modelo: "Gixxer 250",
        categoria: "Urbanas",
        id: 507599,
        cilindraje: 249,
        precio: 3000,
        sisAbs: "Si",
        potencia: 26.1,
        torque: 22.2,
        inventario: 286,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-04/gixxer-250-negra.png"
    },
    {
        marca: "Suzuki",
        modelo: "GSX 125R",
        categoria: "Urbanas",
        id: 405481,
        cilindraje: 125,
        precio: 1471,
        sisAbs: "No",
        potencia: 11,
        torque: 9.1,
        inventario: 163,
        imgMoto: "https://suzuki.com.co/sites/default/files/2020-06/3%20AZUL_0.png"
    },
    {
        marca: "Suzuki",
        modelo: "GSX-S1000",
        categoria: "Alto cilindraje",
        id: 842289,
        cilindraje: 999,
        precio: 14000,
        sisAbs: "Si",
        potencia: 145,
        torque: 120,
        inventario: 326,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-12/GSX-S1000-Azul.png"
    },
    {
        marca: "Suzuki",
        modelo: "Hayabusa",
        categoria: "Alto cilindraje",
        id: 491278,
        cilindraje: 1340,
        precio: 18400,
        sisAbs: "Si",
        potencia: 190,
        torque: 150,
        inventario: 215,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-11/Hayabusa%20blanca.png"
    },
    {
        marca: "Suzuki",
        modelo: "GSX-S 750ZA",
        categoria: "Alto cilindraje",
        id: 890266,
        cilindraje: 749,
        precio: 10084,
        sisAbs: "Si",
        potencia: 115,
        torque: 81,
        inventario: 190,
        imgMoto: "https://suzuki.com.co/sites/default/files/2021-04/GSXS-750ZA%20BLANCA.png"
    },
    {
        marca: "Honda",
        modelo: "DIO LED",
        categoria: "Automáticas",
        id: 549158,
        cilindraje: 109.2,
        precio: 1438,
        sisAbs: "No",
        potencia: 7.9,
        torque: 8.9,
        inventario: 184,
        imgMoto: "https://zagamotos.com/wp-content/uploads/2019/12/DIO-DLX-Gris-360-lado1.jpg"
    },
    {
        marca: "Honda",
        modelo: "PCX 150",
        categoria: "Automáticas",
        id: 253474,
        cilindraje: 149.3,
        precio: 3000,
        sisAbs: "No",
        potencia: 13,
        torque: 13.5,
        inventario: 231,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/pcx_lateral_der_azul-5a5a0.png"
    },
    {
        marca: "Honda",
        modelo: "NAVI",
        categoria: "Automáticas",
        id: 469058,
        cilindraje: 109.19,
        precio: 1426,
        sisAbs: "No",
        potencia: 7.9,
        torque: 8.91,
        inventario: 131,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/nueva-navi-mix-negro-2023.png"
    },
    {
        marca: "Honda",
        modelo: "CRF 250R",
        categoria: "Enduro",
        id: 452051,
        cilindraje: 249,
        precio: 8738,
        sisAbs: "No",
        potencia: 39,
        torque: 18.8,
        inventario: 334,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CRF250.png"
    },
    {
        marca: "Honda",
        modelo: "CB 125F",
        categoria: "Urbanas",
        id: 590786,
        cilindraje: 124.7,
        precio: 1530,
        sisAbs: "No",
        potencia: 8.41,
        torque: 9.65,
        inventario: 219,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/Rojo-49b78.png"
    },
    {
        marca: "Honda",
        modelo: "X-Blade 160",
        categoria: "Urbanas",
        id: 145591,
        cilindraje: 162.71,
        precio: 2320,
        sisAbs: "Si",
        potencia: 13.7,
        torque: 14.7,
        inventario: 150,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/Honda_XBlade_Roja.png"
    },
    {
        marca: "Honda",
        modelo: "CB 190R",
        categoria: "Urbanas",
        id: 642663,
        cilindraje: 184.4,
        precio: 2710,
        sisAbs: "No",
        potencia: 16.62,
        torque: 16.3,
        inventario: 131,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CB190R_Red.png"
    },
    {
        marca: "Honda",
        modelo: "CB 1000R",
        categoria: "Alto cilindraje",
        id: 855880,
        cilindraje: 998,
        precio: 13000,
        sisAbs: "Si",
        potencia: 144,
        torque: 104,
        inventario: 166,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CB1000R_roja2.png"
    },
    {
        marca: "Honda",
        modelo: "CB 650R",
        categoria: "Alto cilindraje",
        id: 192612,
        cilindraje: 649,
        precio: 9938,
        sisAbs: "Si",
        potencia: 94,
        torque: 64,
        inventario: 230,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CB650R_colores_gris.png"
    },
    {
        marca: "Honda",
        modelo: "CBR 1000 SP1",
        categoria: "Alto cilindraje",
        id: 815572,
        cilindraje: 1000,
        precio: 18000,
        sisAbs: "Si",
        potencia: 214,
        torque: 113,
        inventario: 219,
        imgMoto: "https://a5i4f6g5.stackpathcdn.com/images/cms/CBR-1000RR-SP1.png"
    },
]
let accesorios = [
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "1117659120",
        talla: {
            L: 164,
            M: 339,
        },
        color: "N/A",
        descripcion: "CASCO MT TARGO ODAR GRIS BRILLO",
        precio: 71.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/1117659120%20.png?alt=media&token=da1a038e-9014-41f8-a771-0955ad6fb058"
    },
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "12796070000",
        talla: {
            L: 318,
            M: 195,
        },
        color: "N/A",
        descripcion: "CASCO MT FF110 REVENGE 2 MOTO3 A0 BLANCO BRILLO",
        precio: 115.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/REVENGE%202%20MOTO%203%20A0%20MATT%20WHITE%201.png?alt=media&token=b28a1544-7066-46de-b3b6-cfa86fa358d4"
    },
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "1117640031",
        talla: {
            L: 347,
            M: 282,
        },
        color: "N/A",
        descripcion: "CASCO MT FF106 TARGO ZYFRA A3 NARANJA FLUOR BRILLO",
        precio: 77.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/1117640031.png?alt=media&token=6b49c108-2b29-4d49-861a-22d92b570d18"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "VAA31",
        talla: {
            L: 332,
            M: 316,
        },
        color: "N/A",
        descripcion: "CASCO INTEGRAL AKUNA YELLOW GLOSS",
        precio: 131.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/VAA31%201.png?alt=media&token=148a4f7c-a407-4389-a815-6205e0eba97a"
    },
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "1279605000",
        talla: {
            L: 184,
            M: 216,
        },
        color: "N/A",
        descripcion: "CASCO MT FF110 REVENGE 2 RS A0 AZUL BRILLO",
        precio: 115.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/CASCO%20MT%20FF110%20REVENGE%202%20RS%20A0%20AZUL%20BRILLO%20S%201.png?alt=media&token=e04411e1-f9be-4b5f-b8d6-18c1bb18cf09"
    },
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "1117659180",
        talla: {
            L: 324,
            M: 262,
        },
        color: "N/A",
        descripcion: "CASCO MT TARGO ODAR ROSA FLUOT BRILLO",
        precio: 71.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/1117659180%20.png?alt=media&token=4170acf4-09c6-425f-ac01-d4c5fdd24d5f"
    },
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "1117659140",
        talla: {
            L: 341,
            M: 334,
        },
        color: "N/A",
        descripcion: "CASCO MT TARGO ODAR NARANJA FLUOT BRILLO",
        precio: 71.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/1117659140.png?alt=media&token=47c21dd7-6b11-428e-9b83-b7156b8e9dda"
    },
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "1117659150",
        talla: {
            L: 265,
            M: 289,
        },
        color: "N/A",
        descripcion: "CASCO MT TARGO ODAR ROJO FLUOT BRILLO",
        precio: 71.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/1117659150.png?alt=media&token=6482f285-305b-41ff-93f1-4853c0cc5bc9"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "AV3P31",
        talla: {
            L: 265,
            M: 289,
        },
        color: "N/A",
        descripcion: "CASCO CROSS AVIATOR 3 PRIMAL YELLOW",
        precio: 889,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/AV3P31.png?alt=media&token=802a0261-5aaf-49c4-a9a7-be99395196a5"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "AV3R35",
        talla: {
            L: 238,
            M: 187,
        },
        color: "N/A",
        descripcion: "CASCO CROSS AVIATOR 3 RAINBOW ANTHRACITE",
        precio: 663.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/AV3R35.png?alt=media&token=12050876-4b13-4c31-9c98-05b3ae4eda2b"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "AV3RAM35",
        talla: {
            L: 199,
            M: 192,
        },
        color: "N/A",
        descripcion: "CASCO CROSS AVIATOR 3 RAMPAGE BLACK",
        precio: 663.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/AV3RAM35.png?alt=media&token=bb0512a3-6a74-4b28-8c08-b874bdd9c6e8"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "AV3R32",
        talla: {
            L: 286,
            M: 219,
        },
        color: "N/A",
        descripcion: "CASCO CROSS AVIATOR 3 RAINBOW ORANGE",
        precio: 663.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/AV3R32%201.png?alt=media&token=b8d845d4-7703-4563-94a6-5d56fa8f627a"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "SP11",
        talla: {
            L: 161,
            M: 168,
        },
        color: "N/A",
        descripcion: "CASCO INTEGRAL SPARK COLOR BLACK MATTE",
        precio: 175.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/SP11.png?alt=media&token=096ef863-a8f8-48d2-a1b0-c1c7f6f65555"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "TRRSP32",
        talla: {
            L: 198,
            M: 251,
        },
        color: "N/A",
        descripcion: "CASCO JET TRR S PURE ORANGE MATTE",
        precio: 191.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/TRRSP32.png?alt=media&token=b173dd76-6f3d-4598-98f1-cc382bc504c1"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "TW2T31",
        talla: {
            L: 258,
            M: 297,
        },
        color: "N/A",
        descripcion: "CASCO CROSS TWIST 20 TECH YELLOW M",
        precio: 199.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/TW2T31.png?alt=media&token=d0df254d-57a4-4a01-b754-68b9f806ceb8"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "TW2T18",
        talla: {
            L: 264,
            M: 235,
        },
        color: "N/A",
        descripcion: "CASCO CROSS TWIST 20 TECH BLUE GLOSS",
        precio: 199.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/TW2T18.png?alt=media&token=06d6abb7-9a4b-4523-917d-a19903f39aa6"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "WRM18",
        talla: {
            L: 274,
            M: 260,
        },
        color: "N/A",
        descripcion: "CASCO CROSS WRAAP MOOD BLUE GLOSS",
        precio: 161.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/WRM18.png?alt=media&token=1ef1c3f5-3315-45ee-b3e9-76ed6e41a8c9"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "SPCA35",
        talla: {
            L: 292,
            M: 317,
        },
        color: "N/A",
        descripcion: "CASCO INTEGRAL SPARK SCALE MATTE",
        precio: 191.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/SPCA35%201.png?alt=media&token=f281e006-7598-457c-94a6-45cf9fdd92af"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "TRRSC55",
        talla: {
            L: 171,
            M: 261,
        },
        color: "N/A",
        descripcion: "CASCO JET TRR S CONVERT RED GLOSS",
        precio: 134.26,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/TRRSC55%20.png?alt=media&token=35f1fea0-e197-4d88-bf20-b1283bf6e1b4"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "CMSK81",
        talla: {
            L: 205,
            M: 183,
        },
        color: "N/A",
        descripcion: "CASCO DUAL COMMANDER SKILL MATT",
        precio: 389.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/CMSK81.png?alt=media&token=4eb899da-ca27-4728-8f7f-905c230ced32"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "AV3RAM55",
        talla: {
            L: 326,
            M: 201,
        },
        color: "N/A",
        descripcion: "CASCO CROSS AVIATOR 3 RAMPAGE RED GLOSS",
        precio: 663.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/AV3RAM55.png?alt=media&token=9aef19d6-23b6-48a7-a23b-874af57a0d6a"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "GP55W55",
        talla: {
            L: 263,
            M: 305,
        },
        color: "N/A",
        descripcion: "CASCO INTEGRAL GP550 S WANDER RED MATT",
        precio: 331.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/GP55W55.png?alt=media&token=b3d842da-c851-4536-ba7b-5ca531bbca6c"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "ST.5T31",
        talla: {
            L: 331,
            M: 165,
        },
        color: "N/A",
        descripcion: "CASCO INTEGRAL ST.501 TYPE YELLOW MATT",
        precio: 259.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/ST.5T31.png?alt=media&token=3929ce75-2168-4f00-b9ec-13b4dd7fa5b0"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "ST.5T55",
        talla: {
            L: 232,
            M: 156,
        },
        color: "N/A",
        descripcion: "CASCO INTEGRAL ST.501 TYPE RED MATE",
        precio: 259.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/ST.5T55.png?alt=media&token=22f24d6e-70f9-4c27-a69f-ef050350cd31"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "VAW32",
        talla: {
            L: 306,
            M: 220,
        },
        color: "N/A",
        descripcion: "CASCO VALOR WINGS ORANGE MATE",
        precio: 159.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/VAW32.png?alt=media&token=db0d1fd2-1a02-4385-a4a1-de6c958904e4"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "VAW31",
        talla: {
            L: 259,
            M: 299,
        },
        color: "N/A",
        descripcion: "CASCO INTEGRAL VALOR YELLOW MATT",
        precio: 159.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/VAW31.png?alt=media&token=b62ec9bb-0e49-4be3-9465-73c54018436f"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "AV3W31",
        talla: {
            L: 343,
            M: 322,
        },
        color: "N/A",
        descripcion: "CASCO CROSS AVIATOR 3 WAVE YELLOW MATE",
        precio: 663.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/AV3W31.png?alt=media&token=961235e3-05f5-45ee-9655-2fc0dce32072"
    },
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "10520005",
        talla: {
            L: 240,
            M: 207,
        },
        color: "N/A",
        descripcion: "CASCO MT FU401SV ATOM SV SOLID AMAR FLU BRI",
        precio: 147.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/10520005%201.png?alt=media&token=a7725126-f5bd-4b3b-ad86-02cb0c0b06ce"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "AV3RAM32",
        talla: {
            L: 324,
            M: 154,
        },
        color: "N/A",
        descripcion: "CASCO CROSS AVIATOR 3 RAMPAGE ORANGE MATT",
        precio: 663.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/AV3RAM32.png?alt=media&token=4d5bcf83-66df-4136-b0df-f1947a48f72f"
    },
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "1272612023",
        talla: {
            L: 218,
            M: 215,
        },
        color: "N/A",
        descripcion: "CASCO MT TR902XSV STREETFIGHTER SV DARKNESS A2 GRIS MATE",
        precio: 97.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/1272612023.png?alt=media&token=dea9ac24-127f-44b1-bc79-6a4a05cc60b0"
    },
    {
        categoria: "Cascos",
        marca: "MT Helmets",
        referencia: "1279721031",
        talla: {
            L: 331,
            M: 187,
        },
        color: "N/A",
        descripcion: "CASCO MT FF110 REVENGE 2 SCALPEL A3 AMAR FLU BRI",
        precio: 115.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/1279721031.png?alt=media&token=9f7bda74-ac6e-473d-beee-ca0d446b79f5"
    },
    {
        categoria: "Cascos",
        marca: "AIROH",
        referencia: "AV3W32",
        talla: {
            L: 159,
            M: 152,
        },
        color: "N/A",
        descripcion: "CASCO CROSS AVIATOR 3 WAVE ORANGE CHROME",
        precio: 663.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/AV3W32.png?alt=media&token=b792460b-8d9c-4e3e-b3c0-d91059bb7299"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "8BA4S200",
        talla: {
            L: 262,
            M: 280,
        },
        color: "N/A",
        descripcion: "BALACLAVA GRIS",
        precio: 27,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/8BA4S200.png?alt=media&token=f5b38814-4030-4c8b-abe7-f26350b41518"
    },
    {
        categoria: "Vestuario",
        marca: "GIVI",
        referencia: "HJS308MGEV",
        talla: {
            L: 158,
            M: 231,
        },
        color: "N/A",
        descripcion: "CHAQUETA NEGRA CAFÉ NEON",
        precio: 77.88,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/HJS308.MG-EV.jpg?alt=media&token=b63d1267-7869-4e59-b735-2f6e64a187a5"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2TOAII100",
        talla: {
            L: 168,
            M: 262,
        },
        color: "N/A",
        descripcion: "CHAQUETA TOUAREG 2 NEGRA",
        precio: 357.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2TOAII100.png?alt=media&token=eb5982c6-7a8b-4ed9-a955-c1a53d07423a"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2AIRXD100",
        talla: {
            L: 310,
            M: 219,
        },
        color: "N/A",
        descripcion: "CHAQUETA AIRSTREAM-X LADY NEGRA",
        precio: 257.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2AIRXD100.png?alt=media&token=9c53ef0f-a850-49cf-9997-5ac1cd1f341d"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2ATH300",
        talla: {
            L: 296,
            M: 311,
        },
        color: "N/A",
        descripcion: "CHAQUETA ATOM HOODIE",
        precio: 117.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2ATH300.png?alt=media&token=bf630fac-5a8e-47dc-ad77-6d0e49b0d9de"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2AIRXD1100",
        talla: {
            L: 324,
            M: 298,
        },
        color: "N/A",
        descripcion: "CHAQUETA AIRSTREAM-X LADY TITANIUM",
        precio: 257.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2AIRXD1100.png?alt=media&token=80c4977e-f6fa-489d-9a75-0e6e935b4d34"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2BUMD100",
        talla: {
            L: 270,
            M: 178,
        },
        color: "N/A",
        descripcion: "CHAQUETA BUSTER MESH LADY NEGRA",
        precio: 117,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2BUM_100_1.jpg?alt=media&token=31268a2c-3f57-4a87-84bc-70459a5dcfbd"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "7AVEII200",
        talla: {
            L: 252,
            M: 218,
        },
        color: "N/A",
        descripcion: "PANTALON AIRVENT EVO 2",
        precio: 193.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/7AVEII200.png?alt=media&token=8a916aff-3f73-45e2-8f33-67a8716afc62"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2INFIIP100",
        talla: {
            L: 203,
            M: 314,
        },
        color: "N/A",
        descripcion: "CHAQUETA INFINITY 2 PRO NEGRA",
        precio: 353.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2INFIIP100.png?alt=media&token=70725812-8e18-4360-aa84-91374127011c"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2TCH200",
        talla: {
            L: 158,
            M: 302,
        },
        color: "N/A",
        descripcion: "CHAQUETA TITAN CORE GRIS",
        precio: 177.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2TCH200.png?alt=media&token=09e0e943-7ccc-4631-affb-e303dac23fe4"
    },
    {
        categoria: "Vestuario",
        marca: "SEVENTY",
        referencia: "SD2104702",
        talla: {
            L: 267,
            M: 346,
        },
        color: "N/A",
        descripcion: "CHAQUETA SD-JR47 INVIERNO RACING HOMBRE NEG GRIS",
        precio: 111.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/JR-47-black-grey.jpg?alt=media&token=2a96847a-e706-4b58-8b47-a4a65d9564a1"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "8D3KEG",
        talla: {
            L: 304,
            M: 160,
        },
        color: "N/A",
        descripcion: "PROTECTOR DE RODILLAS / CODOS D3O GHOST",
        precio: 22,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/8D3KEGNONE.png?alt=media&token=ea8056dd-81fd-49d1-8713-295e88514b9d"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "8D3BS2500",
        talla: {
            L: 157,
            M: 281,
        },
        color: "N/A",
        descripcion: "PROTECTOR DE ESPALDA NARANJA",
        precio: 39.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/8D3BS2500.png?alt=media&token=797d6a30-0b00-42e2-a43c-164f9f68667a"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "8D3E2",
        talla: {
            L: 301,
            M: 278,
        },
        color: "N/A",
        descripcion: "JUEGO DE PROTECTOR DE CODO D3O NIVEL 2",
        precio: 23.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/8D3E2_NONE_1.png?alt=media&token=7cfc4bf3-cb21-4c09-b490-d6f46c21371f"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "8D3S2",
        talla: {
            L: 331,
            M: 252,
        },
        color: "N/A",
        descripcion: "JUEGO DE PROTECTOR DE HOMBRO D3O NIVEL 2",
        precio: 17.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/8D3S2.png?alt=media&token=29d0f11d-e5c1-45dc-8d4c-dde72beb91f7"
    },
    {
        categoria: "Vestuario",
        marca: "ZANDONA",
        referencia: "3115",
        talla: {
            L: 276,
            M: 235,
        },
        color: "N/A",
        descripcion: "ROD ELBOW GUARD NEGRO/BLANCO",
        precio: 37.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/3115%20.jpg?alt=media&token=5724036e-88b9-408c-acc3-31efc13934ed"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "INFIIP400",
        talla: {
            L: 348,
            M: 344,
        },
        color: "N/A",
        descripcion: "CHAQUETA INFINITY 2 PRO ROJA",
        precio: 353.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2INFIIP400.png?alt=media&token=3e4187bb-a38b-4dec-a943-00f9a816570e"
    },
    {
        categoria: "Vestuario",
        marca: "GIVI",
        referencia: "IQUICHE-O",
        talla: {
            L: 175,
            M: 275,
        },
        color: "N/A",
        descripcion: "CHAQUETA IMPERMEABLE CON PROTECCION",
        precio: 32.88,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/IQUCHE%20O.jpeg?alt=media&token=1401543e-1540-4c6f-aa2f-7a0ae9b7c12e"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "7CLIIP100",
        talla: {
            L: 333,
            M: 272,
        },
        color: "N/A",
        descripcion: "PANTALON COLORADO 2 PRO NEGRO",
        precio: 265.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/7CLIIP100%20.png?alt=media&token=ca94b3bd-66ae-4006-9339-798ce118a8e6"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "8UPS300",
        talla: {
            L: 249,
            M: 261,
        },
        color: "N/A",
        descripcion: "PANTALON PRENDA INTERNA AZUL",
        precio: 53.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/8UPS300.png?alt=media&token=78510003-ee5c-44ee-9898-10043c48dadb"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2BK200",
        talla: {
            L: 167,
            M: 162,
        },
        color: "N/A",
        descripcion: "CHAQUETA BOKA LADY WP GRIS",
        precio: 199.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2BK200.png?alt=media&token=415adf69-e0b4-4a76-9eb3-90c733a9cd8a"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2PHAIID100",
        talla: {
            L: 321,
            M: 300,
        },
        color: "N/A",
        descripcion: "CHAQUETA PHANTOM 2 LADY NEGRA",
        precio: 199.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2PHAIID100.png?alt=media&token=b8ef37a1-3d64-45ec-9a8d-620a13732ab4"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "7NJD100",
        talla: {
            L: 226,
            M: 150,
        },
        color: "N/A",
        descripcion: "PANTALON NORA JEANS NEGRO",
        precio: 141.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/7NJD100.png?alt=media&token=36241555-0137-4627-b281-482980bdc61f"
    },
    {
        categoria: "Vestuario",
        marca: "RICHA",
        referencia: "2BK100",
        talla: {
            L: 303,
            M: 292,
        },
        color: "N/A",
        descripcion: "CHAQUETA BOKA LADY WP NEGRO",
        precio: 199.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/2BK100.png?alt=media&token=940a9370-a82f-447a-999f-a4b17a5b95d8"
    },
    {
        categoria: "Guantes",
        marca: "FIVE",
        referencia: "TFX3AIRB",
        talla: {
            L: 254,
            M: 274,
        },
        color: "N/A",
        descripcion: "GUANTE HOMBRE TFX3 AIRFLOW SAND BROWN",
        precio: 65.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/TFX3AIRFLOWB.png?alt=media&token=64865c37-ee3d-41ba-992e-5b6d08cb9a8e"
    },
    {
        categoria: "Guantes",
        marca: "RICHA",
        referencia: "5CI100",
        talla: {
            L: 178,
            M: 214,
        },
        color: "N/A",
        descripcion: "GUANTE CITY GTX",
        precio: 67.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/5CI_100_1.jpg?alt=media&token=21611e25-1cf6-45fa-a60e-2a112b65b64a"
    },
    {
        categoria: "Guantes",
        marca: "RICHA",
        referencia: "5CSII100",
        talla: {
            L: 340,
            M: 238,
        },
        color: "N/A",
        descripcion: "GUANTES COLD SPRING 2 GTX",
        precio: 72.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/5CSII_100_1.jpg?alt=media&token=e5ef7cd2-26e5-43c7-b517-02a2d29f3de6"
    },
    {
        categoria: "Guantes",
        marca: "RICHA",
        referencia: "5SCOD100",
        talla: {
            L: 213,
            M: 184,
        },
        color: "N/A",
        descripcion: "GUANTE SCOPE WOMEN NEGRO",
        precio: 27.5,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/5SCOD100.png?alt=media&token=a170458b-158f-4d26-95d7-4fb9b167897f"
    },
    {
        categoria: "Guantes",
        marca: "FIVE",
        referencia: "RS-C R",
        talla: {
            L: 151,
            M: 287,
        },
        color: "N/A",
        descripcion: "GUANTES FIVE RS-C ROJO",
        precio: 74.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/rsc_red_2019_face_HDR_WEB.png?alt=media&token=116f8faf-0102-4c9d-b2d6-b91592dda990"
    },
    {
        categoria: "Guantes",
        marca: "FIVE",
        referencia: "RS-C NEGRO",
        talla: {
            L: 272,
            M: 219,
        },
        color: "N/A",
        descripcion: "GUANTES FIVE RS-C NEGRO",
        precio: 74.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/rsc_black_2019_face_HDR_WEB.png?alt=media&token=f9d966e4-d5a4-406f-ac62-3d9324b00e42"
    },
    {
        categoria: "Guantes",
        marca: "FIVE",
        referencia: "SF3NY",
        talla: {
            L: 161,
            M: 314,
        },
        color: "N/A",
        descripcion: "GUANTES SF3 NEGRO AMARILLO",
        precio: 80.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/SF3NY.png?alt=media&token=aebe12aa-0a4f-442d-88ca-b2e131e9d945"
    },
    {
        categoria: "Guantes",
        marca: "FIVE",
        referencia: "FRXSPORT",
        talla: {
            L: 132,
            M: 217,
        },
        color: "N/A",
        descripcion: "GUANTES RFX SPORT NEGRO",
        precio: 82.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/RFXSPORT%20.png?alt=media&token=a7fb69eb-64e4-4af5-8fb7-cc2f439b623d"
    },
    {
        categoria: "Maletas/Baules",
        marca: "GIVI",
        referencia: "OBKN58A",
        talla: "N/A",
        color: "N/A",
        descripcion: "MALETA PARA MOTO MONOKEY® TREKKER OUTBACK DE ALUMINIO NATURAL, 58 LTS",
        precio: 514,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/OBKN58A.jpg?alt=media&token=efecf6fe-0e86-485c-8f19-4e8445fe7976"
    },
    {
        categoria: "Maletas/Baules",
        marca: "GIVI",
        referencia: "B32N",
        talla: "N/A",
        color: "N/A",
        descripcion: "BAÚL 32 LTS PLETINA Y KIT ANCLAJE",
        precio: 83.5,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/B32NMAL.jpg?alt=media&token=781400d3-e186-42c7-9f2a-9d18debe2684"
    },
    {
        categoria: "Maletas/Baules",
        marca: "GIVI",
        referencia: "B29N",
        talla: "N/A",
        color: "N/A",
        descripcion: "BAÚL 29 GRIS LITROS INCLUYE PLATINA Y KIT ANCLAJE",
        precio: 50.6,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/B29N.jpg?alt=media&token=6b9afbf5-a5ef-4b7f-a209-357201402e3c"
    },
    {
        categoria: "Maletas/Baules",
        marca: "GIVI",
        referencia: "B29NT",
        talla: "N/A",
        color: "N/A",
        descripcion: "BAÚL 29 LITROS INCLUYE PLATINA Y KIT ANCLAJE",
        precio: 50.6,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/B29NT.jpg?alt=media&token=53fd66ef-129d-4a1c-a170-d9b779cd72f2"
    },
    {
        categoria: "Maletas/Baules",
        marca: "GIVI",
        referencia: "E300N2",
        talla: "N/A",
        color: "N/A",
        descripcion: "BAÚL 30 LTS INCLUYE PLATINA Y KIT ANCLAJE CHAPA",
        precio: 75.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/E300N2.jpg?alt=media&token=46b219fc-3539-47db-9a4a-4f9909eacbd4"
    },
    {
        categoria: "Maletas/Baules",
        marca: "GIVI",
        referencia: "OBKN42A",
        talla: "N/A",
        color: "N/A",
        descripcion: "MALETA PARA MOTO MONOKEY® TREKKER OUTBACK DE ALUMINIO NATURAL, 42 LTS",
        precio: 410.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/OBKN42A.jpg?alt=media&token=b345cfca-0e01-4a85-b0c5-4d54f4fd8145"
    },
    {
        categoria: "Maletas/Baules",
        marca: "GIVI",
        referencia: "E43NMAL+",
        talla: "N/A",
        color: "N/A",
        descripcion: "BAUL 43 LTS MONOLOCK MALLA, ESPALDAR Y BASE",
        precio: 150.6,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/E43NMAL%2B.png?alt=media&token=034bb0fa-4444-4fa0-bc92-3dc7101db298"
    },
    {
        categoria: "Maletas/Baules",
        marca: "GIVI",
        referencia: "V56N",
        talla: "N/A",
        color: "N/A",
        descripcion: "BAÚL V56 MAXIA4 NEGRO CON TAPA NEGRA, CATADIÓPTRICOS ROJOS Y ACABADO EN ALUMINIO ANODIZADO",
        precio: 205.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/V56N.jpg?alt=media&token=22a600a7-02b9-4234-850e-677093fdf149"
    },
    {
        categoria: "Intercomunicadores",
        marca: "INTERPHONE",
        referencia: "INTERPHOACTIVETP",
        talla: "N/A",
        color: "N/A",
        descripcion: "INTERCOMUNICADOR DOBLE TWIN BLUETOOTH HEAD SET ACTIVE",
        precio: 285.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/INTERPHOACTIVETP.png?alt=media&token=ebb87b28-db62-4cc4-9449-55a19e7982de"
    },
    {
        categoria: "Intercomunicadores",
        marca: "INTERPHONE",
        referencia: "INTERPHOUCOM4TP",
        talla: "N/A",
        color: "N/A",
        descripcion: "INTERCOMUNICADOR DOBLE BLUETOOTH HEAD UCOM4",
        precio: 293.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/INTERPHONUCOM%202.png?alt=media&token=86301a70-32ac-4652-965a-05d1bcdc5168"
    },
    {
        categoria: "Intercomunicadores",
        marca: "INTERPHONE",
        referencia: "INTERPHOUCOM2TP",
        talla: "N/A",
        color: "N/A",
        descripcion: "INTERCOMUNICADOR DOBLE BLUETOOTH HEAD UCOM2",
        precio: 276.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/INTERPHONUCOM%202.png?alt=media&token=86301a70-32ac-4652-965a-05d1bcdc5168"
    },
    {
        categoria: "Intercomunicadores",
        marca: "INTERPHONE",
        referencia: "INTERPHOUCOM16TP",
        talla: "N/A",
        color: "N/A",
        descripcion: "INTERCOMUNICADOR DOBLE BLUETOOTH HEAD UCOM16",
        precio: 423.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/INTERPHONUCOM%202.png?alt=media&token=86301a70-32ac-4652-965a-05d1bcdc5168"
    },
    {
        categoria: "Soportes",
        marca: "GIVI",
        referencia: "S953B",
        talla: "N/A",
        color: "N/A",
        descripcion: "SOPORTE PARA GPS",
        precio: 37.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/S953B.jpg?alt=media&token=08dc6333-9319-4d8a-8523-05f03884f45e"
    },
    {
        categoria: "Soportes",
        marca: "INTERPHONE",
        referencia: "SMSMART60",
        talla: "N/A",
        color: "N/A",
        descripcion: "ESTUCHE SMARTPHONE / GPS 6.0 DE MANUBRIO",
        precio: 35.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/SMSMART65.png?alt=media&token=71dc70f5-6b73-4096-8219-df6706bc28e4"
    },
    {
        categoria: "Soportes",
        marca: "INTERPHONE",
        referencia: "SMARMORPRO",
        talla: "N/A",
        color: "N/A",
        descripcion: "SOPORTE UNIVERSAL PARA MANILAR 6.5",
        precio: 39.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/SMARMOR.png?alt=media&token=3319e3fd-f05d-4e64-b34e-d1824cfadca9"
    },
    {
        categoria: "Soportes",
        marca: "INTERPHONE",
        referencia: "SMMASTERPRO",
        talla: "N/A",
        color: "N/A",
        descripcion: "SOPORTE DE TELEFONO UNIVERAL 6.7",
        precio: 32.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/SMMASTER.png?alt=media&token=f4027e0c-564a-4228-a173-d84e2803a9bd"
    },
    {
        categoria: "Seguridad",
        marca: "BUMPER",
        referencia: "885100W",
        talla: "N/A",
        color: "N/A",
        descripcion: "CANDADO BUMPER 885 1 MTS",
        precio: 4.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/enduro-885-blanco.png?alt=media&token=8d0b7263-98a1-4576-8f5c-930a466f82d5"
    },
    {
        categoria: "Seguridad",
        marca: "BUMPER",
        referencia: "92DY",
        talla: "N/A",
        color: "N/A",
        descripcion: "CANDADO BUMPER PIN 5 MM AMARILLO",
        precio: 7.6,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/92D%20Y.png?alt=media&token=1ba47fb2-8c8d-40a1-bcdd-119366c521ef"
    },
    {
        categoria: "Seguridad",
        marca: "BUMPER",
        referencia: "73DY",
        talla: "N/A",
        color: "N/A",
        descripcion: "CANDADO BUMPER PIN 10 MM AMARILLO",
        precio: 4.6,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/enduro-73-d.jpg?alt=media&token=d361a1f2-79ab-40d5-822f-d216f4dfd215"
    },
    {
        categoria: "Seguridad",
        marca: "BUMPER",
        referencia: "92DOR",
        talla: "N/A",
        color: "N/A",
        descripcion: "CANDADO BUMPER PIN 5 MM NARANJA",
        precio: 8.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/92D%20OR.png?alt=media&token=47ab12fc-cbeb-4411-abf1-2338d1ca4829"
    },
    {
        categoria: "Gafas",
        marca: "100 PERCENT",
        referencia: "50110-385-02",
        talla: "N/A",
        color: "N/A",
        descripcion: "GAFAS 100% RACECRAFT SUEZ ESP",
        precio: 71.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/50110-385-02%20%20%20%201.jpg?alt=media&token=c401a3c4-270b-4697-92c5-691508e3d891"
    },
    {
        categoria: "Gafas",
        marca: "100 PERCENT",
        referencia: "50110-336-02",
        talla: "N/A",
        color: "N/A",
        descripcion: "GAFAS 100% RACECRAFT ERGOFLASH ORO ESP",
        precio: 71.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/50110-336-02%20%20%20%201.jpg?alt=media&token=93081966-2b7f-4569-b6a1-3c4460823e69"
    },
    {
        categoria: "Gafas",
        marca: "100 PERCENT",
        referencia: "50410-235-02",
        talla: "N/A",
        color: "N/A",
        descripcion: "GAFAS 100% STRATA MERCURY/ROJ ESP",
        precio: 71.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/50410-235-02%20%20%201.jpg?alt=media&token=e90e6c6a-b6be-47c1-9240-13c0ee813c45"
    },
    {
        categoria: "Gafas",
        marca: "100 PERCENT",
        referencia: "50110-003-02",
        talla: "N/A",
        color: "N/A",
        descripcion: "GAFAS 100% RACECRAFT FIRE RED",
        precio: 71.8,
        imgurl: "https://firebasestorage.googleapis.com/v0/b/motos-y-accesorios.appspot.com/o/50110-003-02%20%20%20%201.jpg?alt=media&token=d489971f-3c8c-4641-865a-ccce3d80ae3f"
    }
]

let columnaMotos = document.getElementById("columnaMotos")
renderMotos(motos)

let buscador = document.getElementById("buscarMotos")
buscador.addEventListener("input", renderProFiltrados)
let desde =document.getElementById("desdeMotos")
desde.addEventListener("input",renderProFiltrados)

function renderProFiltrados (e){
    let proFiltrado= 
    motos.filter(producto => producto.marca.toLowerCase().includes(buscador.value.toLowerCase()) || 
    producto.categoria.toLowerCase().includes(buscador.value.toLowerCase()) ||
    producto.modelo.toLowerCase().includes(buscador.value.toLowerCase()) ||
    (producto.precio>=desde.Number.value)
    )
    renderMotos(proFiltrado)
}

function renderMotos(arrayMotos) {
    columnaMotos.innerHTML = ""
    for (const moto of arrayMotos) {
        let tarjetaMoto = document.createElement("div")
        tarjetaMoto.className = "cardMoto"
        tarjetaMoto.id = moto.id
        tarjetaMoto.innerHTML =
        `<h4>${moto.marca + moto.modelo}</h4>
        <img src=${moto.imgMoto} alt=${moto.modelo}>
        <p>Categoría: ${moto.categoria}</p>
        <p>Cilindraje: ${moto.cilindraje}</p>
        <p>Precio: $${moto.precio}</p>
        <p>ABS?: ${moto.sisAbs}</p>
        <p>Potencia: ${moto.potencia}</p>
        <p>Torque: ${moto.torque}</p>
        <p>Und. disponibles: ${moto.inventario}</p>
        <button class="boton" id=${moto.id}>Añadir al carrito</button>
        `
        columnaMotos.appendChild(tarjetaMoto)
    }
    let botones = document.getElementsByClassName("boton")
    // for (const boton of botones) {
    //     boton.addEventListener("click", addCarrito)
    // }
}

