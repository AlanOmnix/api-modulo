import http from "k6/http"
import { sleep } from "k6"

const URL = "http://64.225.88.17:8080/api/1.0/initialreserve"

const PAYLOAD = JSON.stringify({
  
  uuid: "0123-456-7890",
	
  process: "Reserve",

  processStep: "creatingNewReservation",

  isPaid: false,

  label: "Label",

  data: {
    
    rawAmount: 2.2,
    totalAmount: 2.2,
    discount: 2.2,
    taxesAmount: 0,
    shippingAmount: 0,
    site: "www.mercadolibre.com.ar",
    shippingType: "HD",
    storePickupId: "dsf67s8f678sdf6",
    deliveryType: "ED",
    estimatedDeliveryDate: "YYYY-MM-DD",
    scheduleId: "6sad76as7d8sa67d8a",
    salesChannelId: "as8d8as97d89sa89as8",
    systemId: "asd7897a8sd79as89",
    billingAddress: {
        country: "Argentina",
        city: "Buenos Aires",
        address: "La boca",
        location: "Carrera 9 # 12-23"
    },
    shippingAddress: {
        country: "Argentina",
        address: "Carrera 9 # 12-23",
        location: {
            communeId: "h3j424h4h323j12"
        },
        city: "Buenos Aires",
        contact: {
            name: "Alan",
            email: "alansm9790@gmail.com",
            phone: "3005715778"
        }
    },
    items: [
        {
            sku: "434-665-665",
            name: "Televisor 99,99 pulgadas",
            quantity: 1,
            rawPrice: 2.2,
            listPrice: 2.2,
            salePrice: 2.2,
            discount: 0,
            barcodes: [
                "345435436433"
            ],
            detailLink: "www.mercadolibre.ar/tele99inch",
            color: {
                code: "0",
                name: "black"
            },
            size: {
                code: "0",
                name: "99inch"
            },
            model: {
                code: "0",
                description: "Samsung"
            },
            brand: "0"
        }
    ],
    customer: {
        id: "1143161688",
        name: "Alan Solano Macias",
        email: "alansm9790@gmail.com",
        phone: "3005715778",
        systemId: "asd7897a8sd79as89"
    },
    paymentInfo: [
        {
            type: "CC",
            amount: 2.2
        }
    ]
  }	

})

const PARAMS = {
  headers: {
    "Content-Type": "application/json",
  },
}


export const options = {
  vus: 1000,
  duration: "5s",
  iterations: 2000
}

export default function () {
  http.post(URL, PAYLOAD, PARAMS)
  sleep(1)
}