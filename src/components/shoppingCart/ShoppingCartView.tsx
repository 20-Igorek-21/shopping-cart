import React from 'react';import {observer} from "mobx-react-lite";import styles from './ShoppingCart.module.scss';import ShoppingProductListView from "../shoppingProductList/ShoppingProductListView";import cn from "classnames";import useShoppingCartViewController from "./useShoppingCartViewController";const ShoppingCartView = observer(() => {    const {        products,        totalPrice,        onPlaceOrder,        productDeleted    } = useShoppingCartViewController()    return (        <div className={styles.shoppingCart}>            {(!products.length || (products.length === 1 && productDeleted)) ?                <h2>Shopping cart is empty</h2>            :                <>                    <ShoppingProductListView/>                    <div className={styles.placeOrder}>                        <h1 className={styles.placeOrder__title}>Total: {totalPrice}₴</h1>                        <button                            className={cn('button', styles.placeOrder__button)}                            disabled={!products.length || productDeleted}                            onClick={onPlaceOrder}                        >Place Order</button>                    </div>                </>            }        </div>    );});export default ShoppingCartView;