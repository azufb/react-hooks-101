import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fruid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル：</label>
          <input className="form-control" id="formEventTitle" />
          {/* labelのhtmlForと、inputタグのidを同じ内容にすることで、labelをクリックすると、inputタグをフォーカスさせられる。*/}
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ：</label>
          <textarea className="form-control" id="formEventBody" />
          {/* labelのhtmlForと、inputタグのidを同じ内容にすることで、labelをクリックすると、inputタグをフォーカスさせられる。*/}
        </div>

        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>

        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;