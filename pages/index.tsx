import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, saveCarsData } from "store/index"
import { Header, ContentWrapper, CarCard, ErrorMsg } from "components/index";
var data = require('../public/cars.json')

const Catalog: NextPage = ({carsList}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useDispatch();
  const carsData = useSelector((state: RootState) => state.cars.cars);
  const router = useRouter();
  
  if(!carsList.cars) {
    return <React.Fragment>
      <Header/>
      <ErrorMsg>Erro ao carregar os dados 🙁</ErrorMsg>
    </React.Fragment>
  }

  useEffect(() => {
    dispatch(saveCarsData(carsList.cars));
  },[dispatch]);

  const carClickHandler = (carModel: string) => {
    router.push(`/details/${carModel}`);
  }

  return (
    <React.Fragment>
      <Header />
      <ContentWrapper>
        {carsData.map((car,idx) => (
          <CarCard
            key={car.model+idx}
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
      carsList: data
    }
  }
}


export default Catalog;

