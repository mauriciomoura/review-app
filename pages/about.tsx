import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React from 'react'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  

  return {
    props: {}
  };
}

export default function About({

}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
      <InstagramFeed 
      token="IGQVJYX0U4aE1RUTVzX3Vvd0hCOXpuSUhlWHJ3S3FEcUJzNUs4VlNvYWxmbldVLXA0OGJrQU9OWDFKLVRXZAXp1RW5CUkpkbTRrVHpISFNoS21jUl9WNWQtM09QRkdNaUVqS0JjcTlaR1ZAaMm5lYUlKdwZDZD"  
      counter="12"/>  
    );
}