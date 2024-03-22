import axios from "axios";

const prodUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: prodUrl,
})

export const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format((price / 100).toFixed(2));
  return formattedPrice;
}

export const generateNumbers = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const qty = index + 1;
    return qty;
  })

}

