import supabase from './supabase';

export async function getClicksForUrls(urlIds) {
    console.log('Input URL IDs:', urlIds);
    const { data, error } = await supabase
        .from('clicks')
        .select('*')
        .in('url_id', urlIds);


    if (error) {
        console.error(error.message);
        throw new Error('Unable to load Clicks');
    }

    console.log('Fetched ids from Supabase:', data); 

    return data;
}
