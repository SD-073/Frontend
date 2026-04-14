export const fetchAllProducts = async(setProducts, setLoading, setError) => {
    try{
        setLoading(true)
        const res = await fetch('https://fakestoreapi.com/products');
        if(!res.ok) {
            throw new Error("Failed to fetch products!")
        }
        const data = await res.json();
        setProducts(data)
    }catch(err) {
        setError(err.message)
    }finally {
        setLoading(false)
    }
}