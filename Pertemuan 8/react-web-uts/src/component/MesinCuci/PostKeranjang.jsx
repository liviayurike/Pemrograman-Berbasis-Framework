import React from "react";

const PostKeranjang = (brg) => {
  return (
    <tr>
      <td align="center">{brg.no}</td>
      <td>{brg.id}</td>
      <td>{brg.nama}</td>
      <td>Rp {brg.harga}</td>
      <td align="center">{brg.qty}</td>
      <td>Rp {brg.harga * brg.qty}</td>
    </tr>
  );
};

export default PostKeranjang;
