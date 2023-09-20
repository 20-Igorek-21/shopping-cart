import React, {useMemo, useState} from 'react';import {MAX_PRODUCT_QUANTITY, MIN_PRODUCT_QUANTITY} from "../../constants";import {ShoppingProductCardViewControllerProps} from "./ShoppingProductCard.props";export const useShoppingProductCardViewController = ({product, updateQuantity}: ShoppingProductCardViewControllerProps) => {    const [isShowAlert, setIsShowAlert] = useState<boolean>(true);    const closeAlert = () => {        setIsShowAlert(false);    };    const isSpecialOffer = useMemo(() => {        return Boolean(product.cost.promotional_product)    }, [product.cost.promotional_product])    const increment = () => {        setValidQuantity(product.cost.quantity + 1);    }    const decrement = () => {        setValidQuantity(product.cost.quantity - 1);    }    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {        const quantity = parseInt(event.target.value, 10);        setValidQuantity(quantity);    }    const setValidQuantity = (quantity: number) => {        if (quantity >= MIN_PRODUCT_QUANTITY && quantity <= MAX_PRODUCT_QUANTITY) {            updateQuantity(product.id, quantity)        }    }    return {        isShowAlert,        closeAlert,        isSpecialOffer,        increment,        decrement,        handleChange,    }};export default useShoppingProductCardViewController;