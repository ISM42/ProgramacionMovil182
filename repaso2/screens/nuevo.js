<View style={styles.container}>
  <ImageBackground
    source={image}
    resizeMode="cover"
    style={{
      width: screenWidth,
      height: screenHeight,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Text style={styles.textTítulo}>PELIS CHIDAS</Text>
    <View style={styles.formCard}>
      <Text style={styles.label}>Buscar</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar"
        placeholderTextColor="#999"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={handleSearch}>
      <Text style={styles.buttonText}>Buscar</Text>
    </TouchableOpacity>

    {showResults && (
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContainer}
      />
    )}

    <StatusBar style="auto" />

    {showNoResultsAlert && (
      <View style={styles.alertContainer}>
        <View style={styles.alertBox}>
          <Text style={styles.alertTitle}>Sin resultados</Text>
          <Text style={styles.alertMessage}>
            No se encontraron películas que coincidan con la búsqueda.
          </Text>
          <TouchableOpacity style={styles.alertButton} onPress={hideAlert}>
            <Text style={styles.alertButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
  </ImageBackground>
</View>;
