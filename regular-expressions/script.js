$(function () {
    const UrlYtRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const platKendaraanRegex = /^[A-Z]{1,3}\s?\d{1,4}\s?[A-Z]{0,3}$/;
    const nomorAntrian1Regex = /^(?!0)\d{1}$/;
    const nomorAntrian23Regex = /^\d{1}$/;
    const warnaRegex = /^(?:[0-9a-fA-F]{3}){1,2}$/;
    const ukBanMobilRegex = /^\d{3}\/\d{2}\s?[A-Z]\d{2}$/;

    document.querySelectorAll('input').forEach(function(input) {
        input.addEventListener('input', function() {
            
            //url yt
            if($(this).attr('id') == 'urlyt-regex'){
            const messageUrlYt = document.getElementById('messageUrlYt');
            
                if (UrlYtRegex.test($(this).val())) {
                    messageUrlYt.innerHTML = 'Valdi';
                    messageUrlYt.classList.remove('text-red-300');
                    messageUrlYt.classList.add('text-cyan-200');
                } else {
                    messageUrlYt.innerHTML = 'Belum Valdi';
                    messageUrlYt.classList.remove('text-cyan-200');
                    messageUrlYt.classList.add('text-red-300');
                }

            //plat kendaraan
            } else if($(this).attr('id') == 'platKendaraan-regex'){
                const messageplatKendaraan = document.getElementById('messageplatKendaraan');

                if (platKendaraanRegex.test($(this).val())) {
                    messageplatKendaraan.innerHTML = 'Plat valdi';
                    messageplatKendaraan.classList.remove('text-red-300');
                    messageplatKendaraan.classList.add('text-cyan-200');
                } else {
                    messageplatKendaraan.innerHTML = 'Plat tidak valdi';
                    messageplatKendaraan.classList.remove('text-cyan-200');
                    messageplatKendaraan.classList.add('text-red-300');
                }
                
            //antrian
            } else if($(this).attr('id') == 'noAntrian1-regex' || $(this).attr('id') == 'noAntrian2-regex' || $(this).attr('id') == 'noAntrian3-regex'){
                const messageAntrian = document.getElementById('messageAntrian');
                const inputAntrian1 = document.getElementById('noAntrian1-regex');
                const inputAntrian2 = document.getElementById('noAntrian2-regex');
                const inputAntrian3 = document.getElementById('noAntrian3-regex');
                    
                    if (inputAntrian1.value !== '') {
                        if (nomorAntrian1Regex.test(inputAntrian1.value)) {
                            messageAntrian.innerHTML = 'Valdi';
                            inputAntrian2.classList.remove('hidden');
                            inputAntrian2.classList.add('flex');
                            messageAntrian.classList.remove('text-red-300');
                            messageAntrian.classList.add('text-cyan-200');
                            
                            if (inputAntrian2.value !== '') {
                                if (nomorAntrian23Regex.test(inputAntrian2.value)) {
                                    messageAntrian.innerHTML = 'Valdi';
                                    messageAntrian.classList.remove('text-red-300');
                                    messageAntrian.classList.add('text-cyan-200');
                                    inputAntrian3.classList.remove('hidden');
                                    inputAntrian3.classList.add('flex');
    
                                    if (inputAntrian3.value !== '') {
                                        if (nomorAntrian23Regex.test(inputAntrian3.value)) {
                                            messageAntrian.innerHTML = 'Valdi';
                                            messageAntrian.classList.remove('text-red-300');
                                            messageAntrian.classList.add('text-cyan-200');
                                        } else {
                                            messageAntrian.innerHTML = 'Belum Valdi';
                                            messageAntrian.classList.remove('text-cyan-200');
                                            messageAntrian.classList.add('text-red-300');
                                        }
                                    }
    
                                } else {
                                    messageAntrian.innerHTML = 'Belum Valdi';
                                    messageAntrian.classList.remove('text-cyan-200');
                                    messageAntrian.classList.add('text-red-300');
                                    inputAntrian3.classList.remove('flex');
                                    inputAntrian3.classList.add('hidden');
                                }
    
                            } else {
                                inputAntrian3.classList.remove('flex');
                                inputAntrian3.classList.add('hidden');
                            }
    
                        } else {
                            messageAntrian.innerHTML = 'Belum Valdi';
                            inputAntrian2.classList.remove('flex'); inputAntrian3.classList.remove('flex');
                            inputAntrian2.classList.add('hidden'); inputAntrian3.classList.add('hidden');
                            messageAntrian.classList.remove('text-cyan-200');
                            messageAntrian.classList.add('text-red-300');
                        }
    
                    } else {
                        messageAntrian.innerHTML = '';
                        inputAntrian2.classList.remove('flex'); inputAntrian3.classList.remove('flex');
                        inputAntrian2.classList.add('hidden'); inputAntrian3.classList.add('hidden');
                    }
            
            //warna
            } else if($(this).attr('id') == 'kodeWarna-regex'){
                const messageWarna = document.getElementById('messageWarna');

                if (warnaRegex.test($(this).val())) {
                    messageWarna.innerHTML = 'Kode warna valdi';
                    messageWarna.classList.remove('text-red-300');
                    messageWarna.classList.add('text-cyan-200');
                } else {
                    messageWarna.innerHTML = 'Kode warna tidak valdi';
                    messageWarna.classList.remove('text-cyan-200');
                    messageWarna.classList.add('text-red-300');
                }
            
            //uk ban mobil
            } else if($(this).attr('id') == 'banMobil-regex'){
                const messageUkBanMobil = document.getElementById('messageUkBanMobil');

                if (ukBanMobilRegex.test($(this).val())) {
                    messageUkBanMobil.innerHTML = 'Kode ban valdi';
                    messageUkBanMobil.classList.remove('text-red-300');
                    messageUkBanMobil.classList.add('text-cyan-200');
                } else {
                    messageUkBanMobil.innerHTML = 'Kode ban tidak valdi';
                    messageUkBanMobil.classList.remove('text-cyan-200');
                    messageUkBanMobil.classList.add('text-red-300');
                }
            }
        });
    });
});