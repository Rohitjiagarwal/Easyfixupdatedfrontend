
import data from '@/dataStore/data.json'
import { NextRequest, NextResponse } from 'next/server';


export async function GET (req: NextRequest) {
    // console.log(req);
    // console.log(data);
    const { searchParams } = req.nextUrl;
    const city = searchParams.get("city");
    const brand = searchParams.get("brand");
    const product = searchParams.get("product");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const typeddata = data as Record<string, Record<string, Record<string, any>>>;
    if(!city || !brand || !product){
        return NextResponse.json({error: "not found"}, {status: 400});
    }
    if (!typeddata["data"][city]) {
    return NextResponse.json({ error: "City not found", data : typeddata }, { status: 404 });
    }

    if (!typeddata["data"][city][brand]) {
    return NextResponse.json({ error: "Brand not found in the city" }, { status: 404 });
    }

    if (!typeddata["data"][city][brand][product]) {
    return NextResponse.json({ error: "Product not found under this brand" }, { status: 404 });
    }
    return NextResponse.json(typeddata["data"][city][brand][product]);
}