import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { iCarData } from "src/shared/interfaces"; 
import { Header, ContentWrapper, CarCard, ErrorMsg } from "src/components/index";
var data = require("public/cars.json");

const Catalog: NextPage = ({
  carsList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const carsData: iCarData[] = carsList.cars;
  const router = useRouter();


  if (!carsList.cars) {
    return (
      <React.Fragment>
        <Header />
        <ErrorMsg>Erro ao carregar os dados 🙁</ErrorMsg>
      </React.Fragment>
    );
  }

  const carClickHandler = (carModel: string) => {
    router.push(`/${carModel}`);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Catalog Page</title>
        <meta name="description" content='Browse a list of Exotic Cars'/>
      </Head>
      <Header />
      <ContentWrapper>
        {carsData.map((car, idx) => (
          <CarCard
            key={car.model + idx}
            brand={car.brand}
            model={car.model}
            price={car.price}
            picture={car.catalogPicture}
            carClickHandler={carClickHandler}
          />
        ))}
      </ContentWrapper>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // data fetching...

  return {
    props: {
      carsList: data,
    },
  };
};

export default Catalog;
