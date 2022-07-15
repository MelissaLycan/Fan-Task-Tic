// import React from "react";

// TODO: Database function to pull data and get array

// TODO: JS function to create new inventory item in database

export default function InvList()
    // Needs custom hook

    // need utils with queries and mutations, typedefs and resolvers, apollo connection

return (
    <div>
        <h1 className="logInMsg">Merchandise Inventory</h1>
        <div>
            <div className="tablediv">
                <button
                    data-target="modalAddInv"
                    className="btn addbtn modal-trigger waves-effect waves-light btn-large">
                    Add Item
                </button>




                <div id="modalAddInv" className="modal">
                    <div className="modal-content">
                        <h4>Add to Inventory</h4>

                        {inventory.map((prop, key) => {
                            return (
                                <div className="row">
                                    <form id="add-item-form" class="col s12">
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input
                                                    placeholder="Item Name"
                                                    id={key}
                                                    type="text"
                                                    className="validate"
                                                />
                                                <label for="item_name"></label>
                                            </div>
                                        </div>
                                    </form>
                                </div>)
                        })}
                        {/* </div>}
                                <div className="row">
                                    <div className="input-field col s6">
                                    <input
                                        placeholder="Amount in Stock"
                                        id="currentStock"
                                        type="text"
                                            className="validate"
                                    />
                                    <label for="currentStock"></label>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                    <input
                                        placeholder="Image Link"
                                        id="imageLink"
                                        type="text"
                                            className="validate"
                                    />
                                    <label for="imageLink"></label>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                    <input
                                        placeholder="Order Link"
                                        id="orderLink"
                                        type="text"
                                        className="validate"
                                    />
                                    <label for="orderLink"></label>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                    <input
                                        placeholder="Price"
                                        id="price"
                                        type="text"
                                            className="validate"
                                    />
                                    <label for="price"></label>
                                        <div className="modal-footer">
                                        <button
                                                className="addbtn modal-close waves-effect waves-light btn-large"
                                            href="#!">
                                        Add Item
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </div>




                <div id="modalUpdateInv" className="modal">
                    <div className="modal-content">
                        <h4>Update Item</h4>
                        <div className="row">
                            <form id="update-item-form" className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            placeholder="Item Name"
                                            id="itemNameUpdate"
                                            type="text"
                                            className="validate"
                                        />
                                        <label for="itemNameUpdate"></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            placeholder="Amount in Stock"
                                            id="currentStockUpdate"
                                            type="text"
                                            className="validate"
                                        />
                                        <label for="currentStockUpdate"></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            placeholder="Image Link"
                                            id="imageLinkUpdate"
                                            type="text"
                                            className="validate"
                                        />
                                        <label for="imageLinkUpdate"></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            placeholder="Order Link"
                                            id="orderLinkUpdate"
                                            type="text"
                                            className="validate"
                                        />
                                        <label for="orderLinkUpdate"></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            placeholder="Price"
                                            id="priceUpdate"
                                            type="text"
                                            className="validate"
                                        />
                                        <label for="priceUpdate"></label>
                                        <div className="modal-footer">
                                            <button
                                                className="addbtn modal-close waves-effect waves-light btn-large"
                                                href="#!">
                                                Update Item
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>




                <table className="highlight">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Amount in Stock</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {invRow}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)