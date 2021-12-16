import React from "react";

function ItemCount() {

const [itemCount, setItemCount] = React.useState(1);

return (
	<div style={{ display: "block", padding: 30 }}>
	
	<div>
		<div color="secondary" badgeContent={itemCount}>
		<img src="../media/carts.png" />{" "}
		
			onClick={() => {
			setItemCount(Math.max(itemCount - 1, 0));
			}}
		
			{" "}
			<img src="../media/minus.png" fontSize="small" />
		
		
			onClick={() => {
			setItemCount(itemCount + 1);
			}}
		
			{" "}
			<img src="../media/plus.png" fontSize="small" />
		</div>

	</div>
	</div>
);
}

export default ItemCount;