import useMenu from "../../../Hooks/useMenu";
import Parallex from "../../Home/Parallex/Parallex";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Pizza = () => {
    const [menu] = useMenu()
    
    const pizza = menu.filter(item => item.category === 'pizza')
   
    return (
        <div>
              <div className='grid md:grid-cols-2 gap-4 mt-16'>
                {pizza.map(item=><MenuItem key={item} item={item}></MenuItem>)}
            </div>
            <div className='flex justify-center mt-8 mb-14'>
            <button className='btn btn-outline border-0 border-b-4'>VEIW FULL MENU</button>
           </div>
           <Parallex title='salad' bgColor='bg-[#151515] opacity-50 text-white'></Parallex>
        </div>
    );
};

export default Pizza;