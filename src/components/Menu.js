import React from 'react';
import '../components/Menu.css';

function Menu() {
    return (
        <>
            <div className="menu-container">
                <br />

                <div className="menu-item">
                    <div className="menu"><p>chicken</p></div>
                    <div className="price"><p>19.99</p></div>
                </div>
                <div className="plates">
                    <p>Thai yellow chicken curry with vegetables and basmati steam rice.</p>
                    <p>Chicken parm with penne and homemade pomodoro sauce.</p>
                    <p>Chicken thighs with mushrooms and shallots sauce, mash potatoes.</p>
                </div >

                <div className="menu-item">
                    <div className="menu"><p>beef</p></div>
                    <div className="price"><p>21.99</p></div>
                </div>
                <div className="plates">
                    <p>Beef bourguignon with roasted potatoes and carrots.</p>
                    <p>Stir-fry beef with noodles and vegetables.</p>
                    <p>Homemade meatloaf with roasted broccoli and potato.</p>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>fish</p></div>
                    <div className="price"><p>22.99</p></div>
                </div>
                <div className="plates">
                    <p>Braised salmon with honey-kimchi, steam rice and bok choy.</p>
                    <p>Mediterranean style cod with potatoes.</p>
                    <p>White fish with lemon cream sauce and green beans.</p>
                </div>

                <div className="menu-item">
                    <div className="menu"><p>pork</p></div>
                    <div className="price"><p>18.99</p></div>
                </div>
                <div className="plates">
                    <p>Korean pulled pork sandwich, kimchi coleslaw with homemade potato chips.</p>
                    <p>Grilled pork tenderloins with demi-glace and sweet potato.</p>
                    <p>Panko-breaded pork chops & mash potato</p>
                </div>
            </div>
        </>
    );
}

export default Menu;
