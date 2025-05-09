class LinkedList {
    headNode;
    last;

    constructor() {
        this.headNode = new Node( 'HEAD', 'HEAD'  );
        this.last = this.headNode;
    };

    append( k, v ) {
        const node = new Node( k, v );
        this.last.next = node;
        this.last = node;
    };

    prepend( k, v ) {
        const node = new Node( k, v );
        const second = this.headNode.next;
        this.headNode.next = node
        node.next = second;
    };

    size(){
        let s = 0;
        let n = this.headNode;
        while( n.next != null ) {
            s+=1;
            n = n.next;
        };
        return s;
    };

    head(){
        return this.headNode.next;
    };

    tail(){
        return this.last;
    };

    at( i ) {
        let n = 0;
        let node = this.headNode.next;

        while ( i > 0 && n < i ) {
            if ( node.next == null ) {
                return 'invalid';
            }
            node = node.next;
            n++;
        };

        return node;
    };

    pop(){
        let n = this.headNode;
        if ( n.next == null ) { return 'nothing to pop'; }
        while( n.next != null ) {
            if( n.next.next == null ) {
                let end = n.next;
                // let end = new Node( n.next.val );
                n.next = null;
                this.last = n;
                return end;
            };
            n = n.next;
        };
        return 'nothing to pop';
    };

    containsKey( val ) {
        let n = this.headNode;
        while( n.next != null ) {
            if( n.key == val ) { return true; }
            n = n.next;
        };
        if( this.last.key == val ) { return true; }

        return false;
    };

    contains( val ) {
        let n = this.headNode;
        while( n.next != null ) {
            if( n.val == val ) { return true; }
            n = n.next;
        };
        if( this.last.val == val ) { return true; }

        return false;
    };

    findKey( val ) {
        let i = - 1;
        let n = this.headNode;
        while( n.next != null ) {
            if( n.val == val ) {
                return i;
            }
            i++;
            n = n.next;
        };
        if( this.last.key == val ) { return i; }

        return null;
    };

    find( val ) {
        let i = - 1;
        let n = this.headNode;
        while( n.next != null ) {
            if( n.val == val ) {
                return i;
            }
            i++;
            n = n.next;
        };
        if( this.last.val == val ) { return i; }

        return null;
    };

    getKey( i ){ return this.at( i ).key; };
    getVal( i ){ return this.at( i ).val; };

    insertAt( val, i ){

        let n = 0;
        let prev = this.headNode;
        const valNode = new Node( val );

        while ( i > 0 && n < i ) {
            if ( prev.next == null ) {
                return 'invalid';
            }
            prev = prev.next;
            n++;
        };
        
        // const valNode = new Node( val );
        let next = prev.next;
        prev.next = valNode;
        valNode.next = next;
    };

    popAt( i ) {

        let n = 0;
        let prev = this.headNode;
        // const valNode = new Node( val );

        while ( i > 0 && n < i ) {
            if ( prev.next == null ) {
                return 'invalid';
            }
            prev = prev.next;
            n++;
        };

        let node = prev.next;
        let next = null;
        if ( prev.next.next != null ) {
            next = prev.next.next;
        };

        prev.next = next;
        return node;
    };

    overwrite( key, val, i ){
        let n = this.at( i );
        n.key = key;
        n.val = val;
    };

    allKeys() {
        let out = [];
        let n = this.headNode;
        while( n.next != null ) {
            out.push( n.next.key );
            n = n.next;
        };
        return out;
    };

    allValues() {
        let out = [];
        let n = this.headNode;
        while( n.next != null ) {
            out.push( n.next.val );
            n = n.next;
        };
        return out;
    };

    allPairs() {
        let out = [];
        let n = this.headNode;
        
        while( n.next != null ) {
            out.push( [ n.next.key, n.next.val ] );
            n = n.next;
        };
        return out;
    };

    toString() {
        // SEARCH HERE
        let out = '';
        let n = this.headNode;
        while( n.next != null ) {
            out += `( ${n.val} ) -> `;
            n = n.next;
        };
        out += `( ${this.last.key} / ${this.last.val} ) -> `;
        out += 'null';
        return out;
    };

};

class Node {
    key = '';
    val = '';
    next = null;

    constructor ( k, v, n ) {
        this.key = k;
        this.val = v;
        if ( n ) { this.next = n };
    };
};

export { LinkedList }