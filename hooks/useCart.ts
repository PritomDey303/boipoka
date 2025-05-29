import { useAddToCartMutation, useUpdateCartMutation } from "@/redux/api/cartApi";
import { toast } from "sonner";


interface addDataType {
    bookId: string | undefined,
    quantity: number | undefined
}
export function useCart() {
    const [addToCart, { isLoading }] = useAddToCartMutation()
    const [updateCart] = useUpdateCartMutation()
    //add to cart
    const handleAddtoCart = async (data: addDataType) => {
        try {
            const result = await addToCart(data).unwrap()
            toast.success("Added to cart.")
            return result
        } catch (err) {
            console.log(err)
            toast.error("Failed to add cart.")
        }

    }

    //update cart
    const handleUpdateCart = async (data: addDataType) => {
        try {
            const result = await updateCart(data).unwrap()
            //toast.success("Added to cart.")
            return result
        } catch (err) {
            console.log(err)
            toast.error("Failed to update cart.")
        }
    }








    return {
        isLoading,
        handleAddtoCart,
        handleUpdateCart

    }
}