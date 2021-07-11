import React from "react";
import "./css.css";
Home.propTypes = {};

function Home(props) {
  return (
    <div className="container">
      <h1 className="demo1">Quản Lý Công Việc</h1>
      <div className="row">
        <div className="col-md-4 col-xs-4 col-sm-4">
          <h3 className="demo2">
            Thêm Công Việc <button className="demo5">X</button>
          </h3>

          <div className="demo4">
            <h4>Tên</h4>
            <input className="demo3" />
            <h4>Trạng Thái</h4>
            <select className="demo3">
              <option>Kích Hoạt</option>
              <option>Ẩn</option>
            </select>
            <div>
              <button className="demo6">Lưu Lại</button>
              <button className="demo6">Huỷ Bỏ</button>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-xs-8 col-sm-8">
          <button className="demo7">+ Thêm Công Việc</button>
          <div>
            <h4>Tìm Kiếm : </h4>
            <input className="demo9" />
            <button className="demo8">Tìm</button>
            <select className="demo10">
              <option>Sắp Xếp</option>
              <option>Từ A - Z</option>
              <option>Từ Z - A</option>
            </select>
          </div>
          <div style={{ marginTop: "10px" }}>
            <table>
              <tr>
                <th className="demo11">STT</th>
                <th className="demo12">TÊN</th>
                <th className="demo13">TRẠNG THÁI</th>
                <th className="demo14">HÀNH ĐỘNG</th>
              </tr>
              <tr>
                <td className="demo11"></td>
                <td className="demo12">
                  <input style={{ width: "90%" }} />
                </td>
                <td className="demo13">
                  <select>
                    <option>Ẩn</option>
                    <option>Kích Hoạt</option>
                    <option>Từ A - Z</option>
                    <option>Từ Z - A</option>
                  </select>
                </td>
                <td className="demo14"></td>
              </tr>
              <tr>
                <td className="demo11">1</td>
                <td className="demo12">Javascript</td>
                <td className="demo13">
                  <span className="demo15">Kích hoạt</span>
                </td>
                <td className="demo14">
                  <button className="demo16">Sửa</button>
                  <button className="demo16">Xoá</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
