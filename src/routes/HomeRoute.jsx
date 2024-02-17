import { ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Hero from '../page/homePage/Hero';
import { Features } from '../page/homePage/features';
import { ProductsBox } from '../components/products';
import { Details } from '../page/homePage/Details';
import { ButtonLink } from '../components/Button';
import Footer from '../components/Footer';
import { useHomeProducts } from '../hooks/swrhook';
import NetworkError from '../components/NetworkError';
import Skeleton from 'react-loading-skeleton';
import { useEffect } from 'react';

export default function HomeRoute() {
  const location = useLocation();
  const { homeProductsData, homeProductsError, homeProductsLoading } =
    useHomeProducts();
  if (homeProductsError?.message === 'Network Error') return <NetworkError />;
  if (homeProductsError?.response?.status > 404)
    return (
      <>
        <Navbar />
        <p className="p-lg abs-center">
          {homeProductsError?.response?.data.message || 'Something went wrong'}
        </p>
        ;
      </>
    );
  const headPhones = homeProductsData?.data?.headphones;
  const laptops = homeProductsData?.data?.laptops;

  return (
    <>
      <Navbar />
      {homeProductsLoading ? (
        <>
          <Skeleton count={75} height={20} />
          <ProductsBox state="loading" />
        </>
      ) : (
        <>
          <Title title="start shopping tech" />
          <Hero state="not loading" />
          <Features />
          <ScrollRestoration
            getKey={(location, matches) => {
              return location.key;
            }}
          />
          <section className="featured-products">
            <ProductsBox title={'#Headphones'} data={headPhones} />
            <div className="featured-products__btn-box">
              <ButtonLink
                link="/products?id=172541&category=Headpones&page=1"
                title="see more"
                nameClass="featured-products__button"
              />
            </div>
          </section>
          <Details />
          <section className="featured-products">
            <ProductsBox title={'#Computers'} data={laptops} />
            <div className="featured-products__btn-box">
              <ButtonLink
                link="/products?id=13896617011&category=Computers&Tablets&page=1"
                title="see more"
                nameClass="featured-products__button"
              />
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}
