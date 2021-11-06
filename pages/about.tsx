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
      token="IGQVJVa01mZADNaVEFDWHRqRWowc29yUnFHYUVVTjEzWXBsVXZA4T1lZAQzg2T1RiYUluVGxRLTMwWnVHbXZAfSWdBYUx2aEtuUkszX29jeTRLLU1rNmpPcW9fRUtGLW43V211VThLLVNOTFpmOFh1bG5weQZDZD"  
      counter="12"/>           
    );
}