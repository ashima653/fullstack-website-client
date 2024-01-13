import "./Home.scss";

import { useEffect , useContext  } from "react";
import  { fetchDataFromApi } from "../../utils/api";

import cat1 from "../../assets/category/cat-1.jpg";

import Products from "../Products/Products";

import Banner from "./Banner/Banner";

import Category from "./Category/Category";

import { Context } from "../../utils/context";


const Home = () => {

    const {categories, setCategories, products, setProducts} = useContext(Context);


    useEffect(()=>{
        getProducts();
        getCategories();
        
    }, []);


    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => { 
            console.log(res);
            setProducts(res);

        } 
            );
    }

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => { 
            console.log(res);
            setCategories(res);

        } 
            );
    }




    return (


    <div className="home">
        
        <Banner/>
        <div className="main-content">
            <div className="layout">
            <Category categories={categories} />

            <Products products={products} headingText="Popular Products"/>
            </div>
           
        </div>
        
    </div>
    );
};

export default Home;
