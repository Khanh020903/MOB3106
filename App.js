import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import
ProductText,// có thể đổi tên
{ ProductTextImage as PI }
  from './src/screens/ProductText';

import ProductList from './src/screens/productList';
// Nếu tạo thư  mục sau khi npm start thì có thể lỗi link 
// Ctrl + C
export default function App() {

  const [countState, setCountState] = useState(0);
  const [showStatus, setShowStatus] = useState(true);
  let name = "Khánh";
  let age = "20";

  if (age > 20) {
    name = 'Nguyễn Đình Khánh - Người lớn';
  } else {
    name = "Nguyễn Đình Khánh-Trẻ em";
  }
  // Hàm hiển thị nội dung theo mong muốn
  function showData(label = '', value = '') {
    return label + ': ' + value;
  }

  // arrow function
  const arrowShowData = (label = '', value = '') => {
    return label + ': ' + value;
  };
  const arrowMiniShowData = (label = '', value = '') => (label + ': ' + value);
  // Ví dụ về tăng biến count
  let count = 0;
  const tangCount = () => count++;

  // Dữ liệu cần truyền do ds
  const productList = [
    {
      id: 1,
      name: 'IPHONE 12'
    },
    {
      id: 2,
      name: 'IPHONE 13'
    }
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ho ten: Nguyễn Đình Khánh</Text>
      <Text style={styles.text}>MSV: PH20404</Text>

      <Button title={'Them moi'}
              onPress={()=> setshowStatus(!showStatus)}
      ></Button>
      {
        showStatus
         ? 
         <>
         

      <TextInput id='name' style={styles.input} placeholder="Nhap ho ten"></TextInput>
      <TextInput id='msv' style={styles.input} placeholder="MSV"></TextInput>
      <TextInput id='link' style={styles.input} placeholder="Link"></TextInput>

      <Button title='Huy'
              onPress={()=> setshowStatus(!showStatus)}></Button> 
              {
                showStatus
                ?
                <>
                <ProductList />
                </>
                  : null
              }
              
      <Button title='Luu'></Button>

      
      </>
        
         : null   
      }
      {/* <ProductList data={productList} /> */}
      {/* <PI />
      <ProductText name={'Tên SP 1'} desc={123} />
      <ProductText name={'Tên SP 2'} desc={123} />
      <ProductText name={'Tên SP 3'} desc={123} /> */}

      {/* <Button
        title={'ADD'}
        onPress={() => setShowStatus(!showStatus)}
      />
      {
        showStatus
          ? <>

            <Text style={styles.text}>Count: {count}</Text>
            <Button
              title={'Bấm để tăng gt count'}
              onPress={() => tangCount()}
            />
          </>
          : null
      } */}

      <ProductList data={productList} />

      {/* <Text style={styles.text}>Count state: {countState}</Text>
      <Button
        title={'Bấm để tăng gt countState'}
        onPress={() => setCountState(countState + 1)}
      />


      <Text style={styles.Text}>{name} PH20404</Text>
      <Text style={styles.Text}>{showData("Email", "khanhndph20404@fpt.edu.vn")}</Text>
      <Text style={styles.Text}>{showData("SDT", "0395742903")}</Text>  */}
      {/* Alt + Shift + Mũi tên xuống: để sao chép dòng */}
      {/* Ctrl + D: Bôi vào những phần nội dung giống nhau */}
      {/* Ctrl + X: Nếu không bôi văn bản thì sẽ xoá cả dòng*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    // tên của phần thay đổi giao diện
    color: "red",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 20,
  },
  input:{
    borderWidth: 0.6,
    margin: 5,
    height: 25,
    width: 300,
  }
});

