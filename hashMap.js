import { LinkedList } from './linkedList.js'

class HashMap {

    load = 0.75;
    capacity = 16;
    holding = 0;
    buckets = [];

    constructor(){
        this.buckets = new Array( this.capacity );
        console.log( 'creating buckets', this.buckets.length );
    };

    hash( val ) {
        val = val.toString();
        // console.log( val );
        let hashcode = 0;
        const prime = 61;
        for( let i = 0; i < val.length; i++ ){
            hashcode = (prime * hashcode + val.charCodeAt( i ) ) % this.buckets.length;
        };
        return hashcode;
    };

    resize(){
        console.log( 'resize me!', this.capacity, this.holding );
        console.log( this.holding / this.capacity, this.load );

        this.capacity *= 2;
        this.holding = 0;
        let allPairs = this.entries();
        this.buckets = new Array( this.capacity );

        for ( let i = 0; i < allPairs.length; i++ ) {
            let key = allPairs[ i ][ 0 ];
            let val = allPairs[ i ][ 1 ];

            this.set( key, val );
        };
        console.log( 'finished resize', this.holding, this.capacity );
        console.log( this.holding / this.capacity, this.load );
    };

    set( key, val ) {
        const i = this.hash( key );
        this.buckets[ i ];

        // EMPTY
        if( !this.buckets[ i ] ) { this.buckets[ i ] = new LinkedList(); };

        // OVERWRITE
        if( this.buckets[ i ].containsKey( key ) ) {
            let index = this.buckets[ i ].findKey( key )
            this.buckets[ i ].overwrite( key, val, index );
            return;
        };

        // ADD
        this.buckets[ i ].append( key, val );
        // this.resize();
        this.holding += 1;
        if( this.holding / this.capacity > this.load ) { this.resize(); }
    };

    get( key ){
        const i = this.hash( key );

        // EMPTY
        if( !this.buckets[ i ] ) { return null };

        // IT'S HERE!
        if( this.buckets[ i ].containsKey( key ) ) {
            let index = this.buckets[ i ].findKey( key )
            return this.buckets[ i ].getVal( index );
        };

        // NOT EMPTY, BUT NOT HERE
        return null;
    };

    has( key ) {
        const i = this.hash( key );

        // EMPTY
        if( !this.buckets[ i ] ) { return false };

        // IT'S GOT SOMETHING!
        return this.buckets[ i ].containsKey( key );
    };

    remove( key ) {
        const i = this.hash( key );

        // EMPTY
        if( !this.buckets[ i ] ) { return false };

        // IT'S GOT SOMETHING!
        if( this.buckets[ i ].containsKey( key ) ) {
            let index = this.buckets[ i ].findKey( key )
            this.buckets[ i ].popAt( index );
            this.holding -= 1;
            return true;
        };
        return false;
    };

    length() {
        let len = 0;
        for( let i = 0; i < this.buckets.length; i++ ) {
            if( this.buckets[ i ] ) {
                len += this.buckets[ i ].size();
            };
        };
        return len;
    };

    size() {
        return this.buckets.length;
    };

    clear() {
        for( let i = 0; i < this.buckets.length; i++ ) {
            this.buckets[ i ] = null;
        };
        this.capacity = 16;
        this.holding = 0;
    };

    keys() {
        let keys = [];
        for( let i = 0; i < this.buckets.length; i++ ) {
            if( this.buckets[ i ] ) {
                // console.log( this.buckets[ i ].allKeys() );
                keys = keys.concat( this.buckets[ i ].allKeys() );
            };
        };
        return keys;
    };

    values() {
        let values = [];
        for( let i = 0; i < this.buckets.length; i++ ) {
            if( this.buckets[ i ] ) {
                values = values.concat( this.buckets[ i ].allValues() );
            };
        };
        return values;
    };

    entries() {
        let entries = [];
        for( let i = 0; i < this.buckets.length; i++ ) {
            if( this.buckets[ i ] ) {
                entries = entries.concat( this.buckets[ i ].allPairs() );
            };
        };
        return entries;
    };

};

export { HashMap };