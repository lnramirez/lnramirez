function() {
    if (this.locationPermit == null || this.locationPermit == true) {
        emit("visit",this);
    }
}