import supabase from './supabase';

export async function getClicksForUrls(urlIds) {
    const { data, error } = await supabase
        .from('clicks')
        .select('*')
        .in('url_id', ['https://www.linkedin.com/in/khadijachichkar/']);
    console.log('this is the data from db:', urlIds);

    if (error) {
        console.error(error.message);
        throw new Error('Unable to load Clicks');
    }

    return data;
}
