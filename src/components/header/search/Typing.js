import Typical from 'react-typical';

const Typing =()=> {
    return (
        <Typical
        steps={
            ['Backpack', 2500,
             'Bracelet', 2500,
             'Jacket', 2500,
             'Raincoat', 2500,
             'Micropave', 2500,
             'T-shirt', 2500,
             'Disk', 2500,]
        }
        loop={Infinity}
        wrapper="p" />
    )
}
export default Typing