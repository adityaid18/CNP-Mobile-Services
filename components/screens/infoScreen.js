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
  const [expandedFive, setExpandedFive] = React.useState(false);

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
             <Text style={{fontSize:17, fontWeight:'bold'}}>Apa itu Layanan Penempatan Kerja di{ expanded ? " LP3I ? " : " LP3I ? "}</Text>
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
             <Text style={{fontSize:17, fontWeight:'bold'}}>Apa saja Kegiatan C&P dalam Melayani{ expandedTwo ? " Penempatan Kerja? " : " Penempatan Kerja? "}</Text>
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
          <Text style={{fontWeight:'bold'}}>pengelompokan Data IPK</Text>
          <Text> a. IPK antara 3.00 – 4.00 merupakan kriteria wajib kerja</Text>
          <Text> b. IPK antara 2.30 – 2.99 merupakan kriteria dibantu kerja</Text>

          <Text style={{fontWeight:'bold'}}>Persyaratan Penempatan Kerja</Text>
          <Text> a. Peserta didik telah menyelesaikan semester 3 dan mengikuti pembelajaran di semester 4</Text>
          <Text> b. Disetujui oleh Head of Education</Text>
          <Text> c. Tidak memiliki nilai D & min. B untuk pendidikan agama</Text> 
          <Text> d. Maksimal usia 25 tahun dan belum menikah</Text>
          <Text> e. Melampirkan sertifikat uji kompetensi minimal 2 dan sertifikat soft skill minimal 4 topik</Text>
          <Text> f. Menyelesaikan administrasi keuangan</Text>
          <Text> g. Memiliki surat keterangan sehat</Text>
          <Text> h. Telah mengikuti pra magang</Text>
          <Text> i. Bersedia ditempatkan di seluruh wilayah Indonesia</Text>

          <Text style={{fontWeight:'bold'}}>Periode Penempatan</Text>
          <Text style={{fontWeight:'bold'}}>Tahap I</Text>
          <Text>Penempatan pra magang (Januari s/d Maret)</Text>
          <Text>Penempatan wajib kerja (April s/d Juni)</Text>

          <Text style={{fontWeight:'bold'}}>Tahap II dan III</Text>
          <Text>Penempatan wajib kerja & dibantu kerja (Juli s/d September & Oktober s/d Desember)</Text>

          <Text style={{fontWeight:'bold'}}>Tahap II dan III</Text>
          <Text>Penempatan wajib kerja & dibantu kerja (Januari s/d Maret)</Text>

          <Text style={{fontWeight:'bold'}}>Proses Pengiriman Calon Kandidat</Text>
          <Text>a. Bagian C&P menerima permintaan kerja</Text>
          <Text>b. Bagian C&P mempelajari kualifikasi yang diinginkan & hal yang harus dibawa saat tes</Text>
          <Text>c. Peserta didik harus memberikan surat pengantar sesuai tes yang diikuti</Text>
          <Text>d. Seleksi calon kandidat berdasarkan persyaratan yang berlaku dengan formula 1+3</Text>
          <Text>f. Peserta didik akan dihubungi pihak C&P untuk diwawancara & diberikan penjelasan tentang perusahaan</Text>
          <Text>g. CV kandidat yang yang lulus interview oleh pihak C&P akan dikirimkan ke pihak perusahaan (dibawa oleh kandidat atau melalui fax atau email)</Text>
          <Text>h. Peserta didik akan mengikuti tes kemampuan oleh pihak perusahaan</Text>
          <Text>i. Head of C&P wajib memberikan informasi kepada perusahaan bahwa peserta lulus seleksi perusahaan. Kemudian</Text>
          <Text>j. Harus menandatangani kontrak kerja dan minimal mendapatkan gaji 10% di atas UMP.</Text>
          
          <Text style={{fontWeight:'bold'}}>Daftar Dokumen</Text>
          <Text>a. Daftar kandidat peserta didik yang wajib kerja</Text>
          <Text>b. Daftar kandidat peserta didik yang dibantu kerja</Text>
          <Text>c. Ucapan selamat kepada orang tua</Text>

        </View>
      )}
      </Card>

      <Card>
      <TouchableOpacity
      onPress={() =>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setExpandedFive(!expandedFive);
      }}
      >
        <View>
             <Text style={{fontSize:17, fontWeight:'bold'}}>3. Pembekalan dari{ expandedFive ? " Pihak Eksternal " : " Pihak Eksternal "}</Text>
        </View>
       
      </TouchableOpacity>
      { expandedFive && (
        <View style={styles.title}>
          <Text style={{fontWeight:'bold'}}>Materi Pembekalan</Text>
          <Text> a. Informasi seputar dunia kerja</Text>
          <Text> b. Proses rekrutmen dan seleksi</Text>
          <Text> c. Tips dan trik seleksi di perusahaan</Text>
          <Text> d. Budaya kerja perusahaan asing</Text>
          <Text> e. Komunikasi dan negosiasi</Text>
          <Text> f. Etika kerja</Text>

          <Text style={{fontWeight:'bold'}}>Tahap Akhir</Text>
          <Text> Dalam proses penempatan kerja, Head of C&P berkewajiban untuk:</Text>
          <Text> a. Memberikan informasi perusahaan dan posisi yang dibutuhkan</Text>
          <Text> b. Mengantar dan mengenalkan kandidat kepada HRD perusahaan</Text>
          <Text> c. Meminta hasil tes kandidat melalui email dan surat secara resmi dari pihak perusahaan</Text>
          <Text> d. Head of C&P mengirimkan ucapan terimakasih kepada perusahaan yang menerima kerja peserta didik</Text>
          <Text> e. Head of C&P mengirimkan ucapan selamat kepada orang tua peserta didik atau alumni.</Text>
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

