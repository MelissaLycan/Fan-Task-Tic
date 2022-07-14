// TODO: refactor inv code here

<main>
    <h2 class="logInMsg">Merchandise Inventory</h2>
    <div>
        <div class="tablediv">
            {/* <!-- BUTTON TO ACTIVATE ADD INVENTORY MODAL --> */}
            <button
                data-target="modalAddInv"
                class="btn addbtn modal-trigger waves-effect waves-light btn-large"
            >
                <i class="material-icons left">create</i>
                Add Item
            </button>
            {/* MODAL */}
            <div id="modalAddInv" class="modal">
                <div class="modal-content">
                    <h4>Add to Inventory</h4>
                    <div class="row">
                        <form id="add-item-form" class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Item Name"
                                        id="itemName"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="item_name"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Amount in Stock"
                                        id="currentStock"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="currentStock"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Image Link"
                                        id="imageLink"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="imageLink"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Order Link"
                                        id="orderLink"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="orderLink"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Price"
                                        id="price"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="price"></label>
                                    <div class="modal-footer">
                                        <button
                                            class="addbtn modal-close waves-effect waves-light btn-large"
                                            href="#!"
                                        ><i class="material-icons left">create</i>Add Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* {{!-- update modal --}} */}
            <div id="modalUpdateInv" class="modal">
                <div class="modal-content">
                    <h4>Update Item</h4>
                    <div class="row">
                        <form id="update-item-form" class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Item Name"
                                        id="itemNameUpdate"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="itemNameUpdate"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Amount in Stock"
                                        id="currentStockUpdate"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="currentStockUpdate"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Image Link"
                                        id="imageLinkUpdate"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="imageLinkUpdate"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Order Link"
                                        id="orderLinkUpdate"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="orderLinkUpdate"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input
                                        placeholder="Price"
                                        id="priceUpdate"
                                        type="text"
                                        class="validate"
                                    />
                                    <label for="priceUpdate"></label>
                                    <div class="modal-footer">
                                        <button
                                            class="addbtn modal-close waves-effect waves-light btn-large"
                                            href="#!"
                                        ><i class="material-icons left">create</i
                                        >Update Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- INVENTORY TABLE --> */}
            <table class="highlight">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Amount in Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {{> invRow}}
                </tbody>
            </table>
        </div>
    </div>
</main>