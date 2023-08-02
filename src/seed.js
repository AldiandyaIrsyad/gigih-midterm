import mongoose from 'mongoose';
import { Video, Product, Comment } from './models/model.js';

// delete all data in database
async function deleteAllData() {
    try {
        await Video.deleteMany();
        await Product.deleteMany();
        await Comment.deleteMany();
        console.log('All data successfully deleted!');
    } catch (error) {
        console.error(error.message);
    }
}


async function seed() {
    // Connect to MongoDB
    try {
        await mongoose.connect('mongodb://localhost:27017/gigih_midterm', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }

    deleteAllData();


    // insert two videos
    const video1 = new Video({
        thumbnail_url: 'https://i.ytimg.com/vi/9XaS93WMRQQ/maxresdefault.jpg',
    });
    const video2 = new Video({
        thumbnail_url: 'https://i.ytimg.com/vi/9XaS93WMRQQ/maxresdefault.jpg',
    });

    await video1.save();
    await video2.save();

    // console log id
    console.log(video1._id);
    console.log(video2._id);

    // insert two products for each video
    const product1 = new Product({
        url: 'https://www.tokopedia.com/officialstore/iphone-12-pro-max-128gb-garansi-resmi-apple-2-tahun?src=topads',
        title: 'iPhone 12 Pro Max 128GB - Garansi Resmi Apple 2 Tahun',
        price: 18999000,
        video_id: video1._id,
    });

    const product2 = new Product({
        url: 'https://www.tokopedia.com/officialstore/iphone-12-pro-max-128gb-garansi-resmi-apple-2-tahun?src=topads',
        title: 'iPhone 12 Pro Max 128GB - Garansi Resmi Apple 2 Tahun',
        price: 18999000,
        video_id: video1._id,
    });

    const product3 = new Product({
        url: 'https://www.tokopedia.com/officialstore/iphone-12-pro-max-128gb-garansi-resmi-apple-2-tahun?src=topads',
        title: 'iPhone 12 Pro Max 128GB - Garansi Resmi Apple 2 Tahun',
        price: 18999000,
        video_id: video2._id,
    });

    const product4 = new Product({
        url: 'https://www.tokopedia.com/officialstore/iphone-12-pro-max-128gb-garansi-resmi-apple-2-tahun?src=topads',
        title: 'iPhone 12 Pro Max 128GB - Garansi Resmi Apple 2 Tahun',
        price: 18999000,
        video_id: video2._id,
    });

    await product1.save();
    await product2.save();
    await product3.save();
    await product4.save();

    console.log(product1);


    // insert two comments for each video
    const comment1 = new Comment({
        username: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Sed vitae nunc vitae nunc.',
        video_id: video1._id,
    });

    const comment2 = new Comment({
        username: 'John Doe2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Sed vitae nunc vitae nunc.',
        video_id: video1._id,
    });

    const comment3 = new Comment({
        username: 'John Doe3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Sed vitae nunc vitae nunc.',
        video_id: video2._id,
    });

    const comment4 = new Comment({
        username: 'John Doe4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Sed vitae nunc vitae nunc.',
        video_id: video2._id,
    });


    await comment1.save();
    await comment2.save();
    await comment3.save();
    await comment4.save();

    await mongoose.connection.close();



}


seed();