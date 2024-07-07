import './category.css'
import CategoryItem from './categItem';

export default function category(){
    const cat =[
        {
            id: 1,
            img: "https://i.pinimg.com/736x/37/bf/3b/37bf3bf4d7278cdbb419b20d6cae6404.jpg",
            title: "SHIRT STYLE",
            link: "/shirt",
        },
        {
            id: 2,
            img: "https://i.pinimg.com/564x/fc/81/15/fc81152890c7568c617f20ce6d606637.jpg",
            title: "LOUNGEWEAR",
            link: "/lounge",
        },
        {
            id: 3,
            img: "https://i.pinimg.com/736x/b9/f2/86/b9f28604ae7f8f2e9963aba656b56320.jpg",
            title: "JACKETS",
            link: "/jacket",
        }
    ]
    const row2 =[
        {
            id: 1,
            img: "https://i.pinimg.com/736x/13/c2/1c/13c21c7571e3919ca49a29df7f7d0313.jpg",
            title: "NEW DRESSES",
            link: "/dress",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "PERFECT PANTS",
            link: "/pant",
        }
    ]
    return(
        <div>
            <div className="categoryDiv">
                {cat.map(item =>
                    <CategoryItem item={item}/>
                )}
            </div>
            <div className="categoryDiv">
                {row2.map(item =>
                    <CategoryItem item={item}/>
                )}
            </div>
        </div>
    );
}