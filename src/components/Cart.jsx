import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button';
import { useCart } from '@/hooks/useCart';
export function Cart({ visible, setVisible }) {
    const { items, removeItem, totalToPay, totalItems } = useCart();
    const cartHeader =
        <div className='flex flex-col'>
            <h1 className='font-black text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                <i className='pi pi-shopping-bag bg-black/10 p-2 rounded-full'></i>Your Bag
            </h1> <span className='text-gray-600'>total Items: {totalItems}</span>
        </div>
        
    return (
        <Sidebar visible={visible} position='right' header={cartHeader} onHide={() => setVisible(false)} className='px-4 py-6'>
            <div className="mt-8">
                <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {items.map(item => (
                            <li key={item.id} className="flex py-6">
                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200 my-2">
                                    <img src={item.image} alt={item.title} className="size-full object-cover" />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                {item.title}
                                            </h3>
                                            <p className="ml-4">${item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Qty {item.quantity}</p>

                                        <div className="flex">
                                            <Button className="font-medium text-gray-600 hover:text-cyan-500" onClick={() => removeItem(item)}>
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {items.length > 0 ? (
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>total</p>
                        <p>${totalToPay}</p>
                    </div>
                    <div className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-colors duration-300" label="Checkout" />
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                            <i className="pi pi-shopping-bag text-4xl text-purple-400"></i>
                        </div>
                        <h3 className="text-lg font-bold text-gray-600">
                            Your bag is Current empty
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Add some products to start!
                        </p>
                        <Button
                            onClick={() => setVisible(false)}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6 py-2"
                        >
                            Continue shopping
                        </Button>
                    </div>
                </div>
            )}

        </Sidebar>
    )
}
