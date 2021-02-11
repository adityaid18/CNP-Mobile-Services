import React from 'react';
import { LayoutAnimation, Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, UIManager } from 'react-native';
import { Card } from 'react-native-elements';




if(
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
){
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const info = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedTwo, setExpandedTwo] = React.useState(false);
  const [expandedThree, setExpandedThree] = React.useState(false);
  const [expandedFour, setExpandedFour] = React.useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
      <Card>
      <TouchableOpacity
      onPress={() =>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setExpanded(!expanded);
      }}
      >
        <View>
             <Text style={{fontSize:17, fontWeight:'bold'}}>Apa itu Layanan Penempatan Kerja di { expanded ? " LP3I ? " : " LP3I ? "}</Text>
        </View>
       
      </TouchableOpacity>
      { expanded && (
        <View style={styles.title}>
          <Text>Layanan penempatan kerja di LP3I dikelola oleh suatu divisi 
                yang disebut divisi C&P (Cooperation & Placement) yang bertugas 
                menjembatani kebutuhan informasi di ke dunia kerja.</Text>
          <Text>Perkembangan yang terjadi di dunia kerja memang terjadi sangat cepat
                sesuai dinamika industri, LP3I dituntut untuk selalu mampu menjawab
                tantangan yang diberikan dengan mencoba menjembatani apa yang diperlukan
                dunia kerja dengan bekal ilmu yang diberikan kepada peserta didik agar 
                menjadi lulusan yang mampu masuk ke dunia kerja.</Text>
          <Text>Selain belajar untuk mendapatkan pengetahuan spesifik sesuai bidang ilmu yang ditekuni, 
                peserta didik perlu memiliki pengetahuan yang cukup terhadap bidang pekerjaan yang kelak 
                mereka tekuni dan berbagai kompetensi yang diperlukan bagi mereka untuk bekerja.</Text>
          <Text>Ada dua hal penting yang menjadi perhatian LP3I yaitu proses pembelajaran dan pembinaan karir. 
                Keduanya diperlukan agar peserta didik memiliki gambaran kegiatan yang mereka jalankan setelah
                lulus sehingga dapat merencanakan perjalanan karir mereka kelak.Persiapan terjun ke dunia kerja
                yang diperkenalkan sedini mungkin akan membantu dalam masa transisi dari dunia pendidikan ke dunia kerja.</Text>
        </View>
      )}
      </Card>


      <Card>
      <TouchableOpacity
      onPress={() =>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setExpandedTwo(!expandedTwo);
      }}
      >
        <View>
             <Text style={{fontSize:17, fontWeight:'bold'}}>Apa saja Kegiatan C&P dalam Melayani { expandedTwo ? " Penempatan Kerja? " : " Penempatan Kerja? "}</Text>
        </View>
       
      </TouchableOpacity>
      { expandedTwo && (
        <View style={styles.title}>
          <Text>Kegiatan-kegiatan yang dilakukan agar tercapai tujuan menempatkan lulusan LP3I bekerja adalah sebagai berikut:</Text>
          <Text> a. Proses Penempatan Kerja</Text>
          <Text> b. Kerjasama Perusahaan</Text>
          <Text> c. Training Soft Skills</Text>
          <Text> d. Kuliah Kerja Industri</Text>
          <Text> e. Job Fair</Text>
          <Text> f. Konseling Karir</Text>
          <Text> g. Tracer Study</Text>
          <Text> h. Sosialisasi dan Penandatanganan SPK</Text>
        </View>
      )}
      </Card>


        <View style={{flex:1, alignItems:'center', paddingLeft:20, paddingTop:10}}>
             <Text style={{fontSize:19, fontWeight:'bold'}}>
               Proses dan Syarat Layanan Penempatan Kerja di LP3I
            </Text>
        </View>
       
       <Card>
      <TouchableOpacity
      onPress={() =>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setExpandedThree(!expandedThree);
      }}
      >
        <View>
             <Text style={{fontSize:17, fontWeight:'bold'}}> 1. Training{ expandedThree ? " Soft Skill " : " Soft Skill "}</Text>
        </View>
       
      </TouchableOpacity>
      { expandedThree && (
        <View style={styles.title}>
          <Text style={{fontWeight:'bold'}}>Training Soft Skill 4 Khusus Penempatan Kerja</Text>
          <Text>Training ini bersifat wajib sebagai syarat proses penempatan kerja dan akan mendapatkan sertifikat dengan absen minimal 85%. 
                Training akan dimulai di semester 3 sampai 4 (maks. 4 minggu sebelum UAS).</Text>
          <Text style={{fontWeight:'bold'}}>Materi Soft Skill 4 Khusus Penempatan Kerja</Text>
          <Text>Informasi mengenai proses kerja, pembuatan CV, komunikasi dengan relasi perusahaan dan etika di dunia kerja.</Text>
          <Text style={{fontWeight:'bold'}}>Penjelasan Pelaksana</Text>
          <Text>Penjelasan pelaksanaan dapat didapatkan melalui:</Text>
          <Text> a. HOC&P dengan HOE membuat agenda Training Soft Skill</Text>
          <Text> b. HOE membuat pengumuman Training Soft Skill</Text>
          <Text> c. Melalui papan pengumuman</Text>
          <Text> d. Melalui pembimbing akademik</Text>
          <Text style={{fontWeight:'bold'}}>Daftar Dokumen</Text>
         <Text>Daftar hadir, Materi soft skill, Biodata pembicara, Sertifikat soft skill</Text>
        </View>
      )}
      </Card>

        <Card>
      <TouchableOpacity
      onPress={() =>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setExpandedFour(!expandedFour);
      }}
      >
        <View>
             <Text style={{fontSize:17, fontWeight:'bold'}}> 2. Persiapan{ expandedFour ? " Administrasi " : " Administrasi "}</Text>
        </View>
       
      </TouchableOpacity>
      { expandedFour && (
        <View style={styles.title}>
          <Text>Kegiatan-kegiatan yang dilakukan agar tercapai tujuan menempatkan lulusan LP3I bekerja adalah sebagai berikut:</Text>
          
        </View>
      )}
      </Card>

      </ScrollView>          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:10,
    justifyContent: 'flex-start',
    alignItems:'flex-start'
  },
   title: {
    alignItems: 'flex-start',
  },

});

